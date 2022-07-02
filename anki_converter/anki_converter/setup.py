#!/usr/bin/env python

from setuptools import setup, find_packages

setup(name='anki_to_yajs',
      version='1.0',
      description='Python script to convert anki.json files to yaml or json',
      author='0xmycf',
      author_email='mycf.mycf.mycf@gmail.com',
      url='',
      packages=find_packages(),
      isntall_requires=["ruamel.yaml"]
     )
