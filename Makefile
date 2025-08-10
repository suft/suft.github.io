SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

default: help

# Show this help
.PHONY: help
help:
	@ echo
	@ echo 'Usage:'
	@ echo ''
	@ echo '   make <target> [flags...]'
	@ echo ''
	@ echo 'Targets:'
	@ echo ''
	@ awk '/^#/{ comment = substr($$0,3) } comment && /^[a-zA-Z][a-zA-Z0-9_-]+ ?:/{ print "  ", $$1, comment }' $(MAKEFILE_LIST) | column -t -s ':' | sort
	@ echo ''


# Open in a zellij session
.PHONY: zellij
zellij:
	@which zellij > /dev/null
ifdef ZELLIJ_SESSION_NAME
	@echo "Already inside Zellij"
else
	zellij attach --create suft-blog
endif

