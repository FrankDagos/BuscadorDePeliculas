# Buscador de Películas

Aplicación de consola en **Node.js** que permite buscar, filtrar y ordenar una colección de películas.  

La arquitectura está organizada en tres archivos principales:

- **`index.js`** → recibe los comandos por CLI y muestra los resultados.  
- **`pelis.js`** → contiene la lógica para leer el archivo, buscar, filtrar y ordenar.  
- **`pelis.json`** → archivo con la colección de películas.  

---

## 📦 Requisitos

- **Node.js** 16 o superior.  
- Sistema operativo con soporte para `fs` (módulo nativo de Node).  

---

## ⚙️ Instalación

```bash
# Clonar o copiar el proyecto
cd tu-carpeta-del-proyecto

```

No requiere dependencias externas, se utiliza solo el módulo `fs` de Node.js.  

---

## 📂 Estructura

```
.
├─ index.js      # CLI: procesa comandos y muestra resultados
├─ pelis.js      # Lógica: leer, filtrar, buscar y ordenar
└─ pelis.json    # Datos: array de películas
```

---

## ▶️ Uso

Ejecutar desde la terminal en la carpeta del proyecto:

### 1. Mostrar todas las películas
```bash
node index.js
```

### 2. Buscar por título
```bash
node index.js --search "titanic"
```

### 3. Filtrar por tag
```bash
node index.js --tag "sci-fi"
```

### 4. Ordenar por propiedad
```bash
node index.js --sort title
node index.js --sort rating
node index.js --sort categoria
```

---

## 📋 Validaciones

- Si falta un argumento obligatorio, se muestra un mensaje de ayuda.  
- Si se ingresa un comando desconocido, aparece:  
  ```
  Comando no reconocido. Usa --sort, --search o --tag.
  ```

---

## 📌 Notas

- La aplicación usa `console.table` para mostrar resultados de forma clara en la terminal.  
- Cada operación vuelve a leer el archivo de películas, lo que garantiza que siempre trabaje con datos actualizados.  
