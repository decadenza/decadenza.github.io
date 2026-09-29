# Most common command: build and upload.
.PHONY: all
all: run
	@echo "Make complete on $(SSH_TARGET)"

.PHONY: run
run:
	npm run dev

.PHONY: build
build:
	npm clean-install
	npm run build
	@echo "Build complete"

.PHONY: doc
doc:
	npm clean-install
	npx typedoc
	@echo "Documentation available at $(shell pwd)/doc/index.html"

# Open existing documentation (cross-platform).
.PHONY: doc-open
doc-open:
	@if [ "$(OS)" = "Windows_NT" ]; then \
		start "$(shell pwd)/doc/index.html"; \
	elif [ "$$(uname -s)" = "Darwin" ]; then \
		open "$(shell pwd)/doc/index.html"; \
	else \
		xdg-open "$(shell pwd)/doc/index.html"; \
	fi

.PHONY: test
test:
	npm clean-install
	npm test
	@echo "Frontend tests complete"
