.PHONY: clean run build

# Platform-specific flags
BIN_PATH = bin/notion-fetch-linux
PLATFORM = $(shell uname -s | tr '[:upper:]' '[:lower:]')
ifeq ($(PLATFORM),darwin)
	BIN_PATH = bin/notion-fetch-macos
endif

build:
	@yarn build
	@yarn compile

run: build
	@./$(BIN_PATH)

clean:
	@rm bin/*

