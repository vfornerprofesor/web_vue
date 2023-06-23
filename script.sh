#!/bin/bash

# Obtiene el directorio donde se encuentra el script
directorio="$(dirname "$(readlink -f "$0")")"
directorio=$directorio"/dist/"
# Función recursiva para procesar archivos en un directorio
procesar_archivos() {
  local dir="$1"

  # Recorre todos los archivos en el directorio actual
  for archivo in "$dir"/*; do
    if [ -f "$archivo" ]; then
      # Realiza el reemplazo en el contenido del archivo
      sed -i 's/\/web_vue\//\//g' "$archivo"
      echo "Archivo $archivo procesado."
    elif [ -d "$archivo" ]; then
      # Si es un directorio, llama a la función recursivamente
      procesar_archivos "$archivo"
    fi
  done
}

# Llama a la función para procesar los archivos en el directorio principal
procesar_archivos "$directorio"

echo "Proceso completado."

