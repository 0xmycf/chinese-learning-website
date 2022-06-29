#!/usr/bin/env python

from setuptools import setup, find_packages

setup(name='md_to_js',
      version='1.0',
      description='Python executable for converting yaml to json',
      author='0xmycf',
      author_email='mycf.mycf.mycf@gmail.com',
      url='',
      packages=find_packages(),
      isntall_requires=["ruamel.yaml"]
     )
