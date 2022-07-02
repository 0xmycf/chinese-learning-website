#! /usr/bin/env python

import sys
import json, yaml
import re

from functools import reduce

def fmap(f, l):
    return list(map(f, l))

def safe_lookup(l: list or dict, n: int):
    try:
        return l[n]
    except IndexError or KeyError:
        return None

# regex check if the string is ONLY chinese characters
def isChinese(s, f):
    bl = all(u'\u4e00' <= c <= u'\u9fff' for c in s)
    if not bl:
        f(s)
    return bl

# this should work as follows:
# '<span style="color: rgb(9, 0, 18);">鍾意<'
# 鍾意'
# '<span style="color: rgb(9, 0, 18);">定係<'
# '定係'
# '<span style="background-color: rgb(255, 255, 255);">懶&nbsp;<'
# '懶'
# use regex to remove the tags
# by https://regexr.com
def removeSpan(s):
    return re.sub(r'\<+[^\u4E00-\u9FA5].[^\u4E00-\u9FA5]*[^\u4E00-\u9FA5]\>+|&nbsp;|\<|\>', '', s)

# This matches only &nbsp; or ' - ' or a <br> tag if nothing comes after it
def removenbsp(s):
    return re.sub(r'&nbsp;|\s*\-\s*|\s*<br>(?!((\W|\S)+))', '', s)

# This function should read the file and parse it
# into a dictionary that contains only the information we need
# the information we need is in the following format:
# "\u4f60\u597d": {
#     "text": "\u4f60\u597d",
#     "translation": "Hello",
#     "jyutping": "Nei5 Hou2",
#     "pinyin": "Ni Hau",
#     "simplified": None, # this field is empty if the characters do not have a simplified form
# },
# The input will look like this:
# {
#     "__type__": "Note", # we can ignore this
#     "fields": [
#         "嗨",     # this is the key and might be the simplified field (if its written like 嗨 / 嗨 then the second char is the simplified char)
#         "haai1",  # this is jyutping
#         "",       # this is pinyin
#         "Hello",  # this is the translation (only extract the first 2 words, a word is: to word1, word2, to word3 => extract word1 and word2)
#         "",       # ignore
#         ""        # ignore
#     ],
#     "guid": "qaUJqv~mD-", # ignore
#     "note_model_uuid": "0f3a0e00-f966-11ec-8799-8b1f24b82815", # ignore
#     "tags": [] # ignore
# },
def read_anki_json(file):
    def note_to_dict(note):
        # extract the simplified and traditional characters
        chinese = fmap(lambda x: x.strip(), removeSpan(note["fields"][0]).split("/"))
        print('Chinese: ' + str(chinese))
        traditional = safe_lookup(chinese, 0)
        simplified = safe_lookup(chinese, 1)
        # extract the translation
        translation = (", ").join(fmap(lambda x: x.strip(), note["fields"][3].split(","))[:3])
        # extract the jyutping and pinyin
        jyutping = note["fields"][1]
        pinyin = note["fields"][2]
        # create the dictionary
        return {
            traditional: {
            "text": traditional,
            "translation": removenbsp(translation),
            "jyutping": removenbsp(jyutping),
            "pinyin": removenbsp(pinyin),
            "simplified": simplified,
            }
        }

    with open(file, 'r') as f:
        loaded: list[dict] = json.load(f)['notes']
        # filtering out any keys which are not Chinese
        return {
            k: v for k, v in
            reduce(lambda acc, note: {**acc, **note}, fmap(note_to_dict, loaded)).items()
            if isChinese(k, lambda _: print({k: v}))
        }

if __name__ == '__main__':
    print("Starting!")

    file_in      = sys.argv[1]
    file_out     = sys.argv[2]
    yaml_or_json = sys.argv[3]
    concat_with  = safe_lookup(sys.argv, 4)

    file_in_parsed = read_anki_json(file_in)

    if concat_with is not None and yaml_or_json == "json":
        with open(concat_with, 'r') as f:
            loaded = json.load(f)
            with open(file_out, 'w') as f:
                json.dump({**loaded, **file_in_parsed}, f, indent=4)
            sys.exit(0)

    with open(file_out, 'w') as f:
        if yaml_or_json == 'yaml':
            yaml.dump(file_in_parsed, f, indent=4)
        else:
            json.dump(file_in_parsed, f, indent=4)



    print("Done!")

