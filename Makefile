.PHONY: all build_yaml build_decks

all: build_yaml build_decks
	plenti build

build_decks:
	cd ./anki-decks; ./convert_decks.sh

build_yaml:
	cd ./yaml-pages; ./convertpages.sh true

