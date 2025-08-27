# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Sphinx documentation project** for a Russian AI system called "Прогнозно-аналитическая мультиагентная ИИ система социально-экономических показателей в сфере образования" (Predictive-Analytical Multi-Agent AI System for Socio-Economic Indicators in Education). The project documents a comprehensive business plan for an innovative AI platform by ООО "СТАРТЕХ БАЗА" targeting 2025.

## Common Development Commands

### Building Documentation

**Main build commands (Linux/macOS):**
```bash
cd sphinx-docs
make html          # Build HTML documentation
make clean         # Clean build artifacts
make help          # Show all available targets
```

**Windows build commands:**
```bash
cd sphinx-docs
make.bat html      # Build HTML documentation
make.bat clean     # Clean build artifacts
make.bat help      # Show all available targets
```

**Output location:** `sphinx-docs/build/html/index.html`

### Development Workflow

1. Edit source files in `sphinx-docs/source/`
2. Build documentation to check changes
3. View results in `sphinx-docs/build/html/`

## Architecture and Structure

### Documentation Structure

- **Configuration:** `sphinx-docs/source/conf.py` - Sphinx configuration with Russian language support
- **Main content:** `sphinx-docs/source/index.rst` - Main documentation entry point
- **Content files:** `sphinx-docs/source/*.md` - Markdown files containing project documentation
- **Static assets:** `sphinx-docs/source/_static/` - Custom CSS and static files
- **Templates:** `sphinx-docs/source/_templates/` - Custom HTML templates

### Key Technologies Used

**Documentation stack:**
- **Sphinx** with Read the Docs theme (`sphinx_rtd_theme`)
- **MyST Parser** for Markdown support alongside reStructuredText
- **Mermaid diagrams** via `sphinxcontrib.mermaid`
- **Extensions:** autodoc, viewcode, todo, mathjax, intersphinx, napoleon

**Content language:** Russian (language = 'ru')

### Content Organization

The documentation covers a comprehensive AI system with these main components:

1. **Multi-agent AI system** for educational data analysis
2. **Graph database (Neo4j)** for storing educational statistics  
3. **NLP processing** for document extraction and analysis
4. **Predictive modeling** for educational metrics forecasting
5. **Dynamic dashboards** and visualization tools

### Key Features Documented

- Processing 750+ statistical tables from Russian education data
- GraphRAG implementation for improved query accuracy
- Multi-level data hierarchy (federal → regional → organizational)
- Integration with Telegram bots and web interfaces
- Competitive analysis and market research capabilities

## File Naming Conventions

- Configuration files: Standard Sphinx naming (`conf.py`, `Makefile`)
- Content files: Descriptive names in transliterated Russian (`naznachenie.md`, `academ.md`)
- Special files: `plan.md` (project timeline), `glossary.md` (technical terms)

## Development Notes

- The project uses Russian language content with technical diagrams in Mermaid format
- Custom CSS styling is applied via `_static/custom.css`
- LaTeX output is configured for A4 paper with Russian language support
- All content should maintain professional documentation standards for business planning