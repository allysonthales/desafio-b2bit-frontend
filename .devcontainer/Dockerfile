FROM mcr.microsoft.com/devcontainers/base:jammy

# Define o diretorio para instalação do nvm
ENV NVM_DIR=/usr/local/share/nvm

# Install o nvm
RUN mkdir -p $NVM_DIR \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Install o node
RUN . $NVM_DIR/nvm.sh && nvm install 22 && npm install -g pnpm@10.8.0

# Define o diretório de trabalho
WORKDIR /workspace