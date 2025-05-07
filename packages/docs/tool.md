# Command Line Utility

The Python package contains a command-line utility for you to quickly explore large text datasets with metadata.

<img style="border-radius: 4px" class="light-only" src="./assets/embedding-atlas-light.png">
<img style="border-radius: 4px" class="dark-only" src="./assets/embedding-atlas-dark.png">

## Installation

```bash
pip install embedding-atlas
```

and then launch the command line tool:

```bash
embedding-atlas [OPTIONS] INPUTS...
```

::: tip
To avoid package installation issues, we recommend using the [uv package manager](https://docs.astral.sh/uv/) to install Embedding Atlas and its dependencies. uv allows you to launch the command line tool with a single command:

```bash
uvx embedding-atlas
```
:::

## Loading Data

You can load your data in two ways: locally or from Hugging Face.

### Loading Local Data

To get started with your own data, run:

```bash
embedding-atlas path_to_dataset.parquet
```

### Loading Hugging Face Data

You can instead load datasets from Hugging Face:

```bash
embedding-atlas huggingface_org/dataset_name
```

## Visualizing Embedding Projections

To visual embedding projections, pre-compute the X and Y coordinates, and specify the column names with `--x` and `--y`, such as:

```bash
embedding-atlas path_to_dataset.parquet --x projection_x --y projection_y
```

You may use the [SentenceTransformers](https://sbert.net/) package to compute high-dimensional embeddings from text data, and then use the [UMAP](https://umap-learn.readthedocs.io/en/latest/index.html) package to compute 2D projections.

You may also specify a column for pre-computed nearest neighbors:

```bash
embedding-atlas path_to_dataset.parquet --x projection_x --y projection_y --neighbors neighbors
```

The `neighbors` column should have values in the following format: `{"ids": [id1, id2, ...], "distances": [d1, d2, ...]}`.
If this column is specified, you'll be able to see nearest neighbors for a selected point in the tool.

:::

Once this script completes, it will print out a URL like `http://localhost:5055/`. Open the URL in a web browser to view the embedding.

## Usage

```
Usage: embedding-atlas [OPTIONS] INPUTS...

Options:
  --text TEXT                   The column name for text.
  --image TEXT                  The column name for image.
  --split TEXT                  The data split name for Hugging Face data.
                                Repeat this command for multiple splits.
  --model TEXT                  The model for producing text embeddings.
  --trust-remote-code           Trust remote code when loading models.
  --x TEXT                      The column name for x coordinate.
  --y TEXT                      The column name for y coordinate.
  --neighbors TEXT              The column name for pre-computed nearest
                                neighbors. The values should be in {"ids":
                                [n1, n2, ...], "distances": [d1, d2, ...]}
                                format.
  --sample INTEGER              The number of rows to sample from the original
                                dataset.
  --umap-n-neighbors INTEGER    The n_neighbors parameter for UMAP.
  --umap-min-dist FLOAT         The min_dist parameter for UMAP.
  --umap-metric TEXT            The metric for UMAP.
  --umap-random-state INTEGER   The random seed for UMAP.
  --duckdb TEXT                 DuckDB server URI (e.g., ws://localhost:3000,
                                http://localhost:3000), or 'wasm' to run
                                DuckDB in browser, or 'server' to run DuckDB
                                in this server. Default to 'wasm'.
  --host TEXT                   The hostname of the http server.
  --port INTEGER                The port of the http server.
  --auto-port / --no-auto-port  Enable / disable auto port selection. If
                                disabled, the application crashes if the
                                specified port is already used.
  --static TEXT                 Path to the static files for frontend.
  --export-application TEXT     Export a static Web application to the given
                                zip file and exit.
  --version                     Show the version and exit.
  --help                        Show this message and exit.
```
