# Navigation App

Aplicación móvil desarrollada con React Native y Expo enfocada en practicar distintos tipos de navegación utilizando `expo-router` y `react-navigation`.

---

## Características

- Navegación mediante Tabs
- Drawer Menu (menú hamburguesa)
- Navegación dinámica entre pantallas
- Lista de productos
- Vista de detalles por producto
- Pantallas de perfil y configuraciones
- Estilos utilizando NativeWind

---

## Funcionalidades principales

### Productos

La aplicación cuenta con una sección de productos donde:

- Se muestra una lista de productos disponibles
- Cada producto puede seleccionarse
- Al tocar un producto, la app navega dinámicamente hacia una pantalla específica usando su `id`
- En la vista de detalles se muestra información individual del producto

### Drawer Navigation

La app incluye un menú hamburguesa que permite acceder rápidamente a distintas secciones de la aplicación.

### Tabs Navigation

Se utilizan pestañas inferiores para navegar entre diferentes vistas como:

- Home
- Favorites
- Profile

---

## Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- React Navigation
- NativeWind
- TypeScript

---

## Instalación

Clonar el repositorio:

```bash
git clone <repository-url>
```

Entrar al proyecto:

```bash
cd navigation-app
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecutar el proyecto

Iniciar el servidor de desarrollo:

```bash
npx expo start
```

---

## Comandos útiles

### Iniciar Expo

```bash
npx expo start
```

### Ejecutar en Android

```bash
npx expo run:android
```

### Ejecutar en iOS

```bash
npx expo run:ios
```

### Limpiar caché

```bash
npx expo start --clear
```

---

## Estructura general

```bash
app/
├── (tabs)/
├── products/
├── profile/
├── settings/
└── favorites/
```

---

## Objetivo del proyecto

El objetivo principal de esta aplicación es practicar y comprender:

- Navegación dinámica
- Rutas anidadas
- Drawer Navigation
- Tabs Navigation
- Manejo de pantallas en Expo Router
- Organización de proyectos React Native

---

## Autor

Bryan Alvarado
