# Guía de Inicio para Desarrolladores:

## 🚦 Pasos para Contribuir al Proyecto

1. **Clona el repositorio:**

```bash
git clone https://github.com/DevCoreGroup/Landing-Page-DevCore-Group.git
```

2. **Accede a la carpeta e instala las dependencias:**

```bash
cd Landing-Page-DevCore-Group
npm install
```

3. **Sincroniza con la última versión de `main` (¡siempre antes de empezar!):**

```bash
git checkout main
git pull origin main
```

4. **Crea una nueva rama para tu tarea asignada:**

```bash
git checkout -b feature/2.1/crear-componente-button
```

5. **Desarrolla el componente en el archivo correspondiente**  
   Ejemplo: `src/components/ui/Button.tsx`  
   Sigue la descripción y los criterios de aceptación definidos en ClickUp.

6. **Realiza commits pequeños y descriptivos conforme avances.**

7. **Sube tu rama a GitHub:**

```bash
git push -u origin nombre-de-la-rama
```

8. **Crea una Pull Request (PR) dirigida a `main`.**  
   En la descripción, enlaza la tarea de ClickUp y asígnale al revisor correspondiente.

---

# 🏗️ Arquitectura del Proyecto - DevCore Group Landing Page

## 📁 Estructura de Carpetas

### `/src/app`

**Propósito**: Contiene las páginas y rutas de la aplicación usando Next.js App Router

- `page.tsx` - Páginas principales
- `layout.tsx` - Layouts compartidos
- `loading.tsx` - Estados de carga
- `error.tsx` - Manejo de errores
- Carpetas para rutas anidadas

**Ejemplo**:

```
/src/app/
  ├── page.tsx          # Página principal (/)
  ├── layout.tsx        # Layout principal
  ├── about/
  │   └── page.tsx      # Página about (/about)
  └── services/
      └── page.tsx      # Página servicios (/services)
```

### `/src/components/ui`

**Propósito**: Componentes reutilizables básicos (botones, inputs, cards, etc.)

- Componentes pequeños y atómicos
- Sin lógica de negocio específica
- Altamente reutilizables en todo el proyecto

**Ejemplos**: `Button.tsx`, `Input.tsx`, `Card.tsx`, `Modal.tsx`

### `/src/components/layout`

**Propósito**: Componentes de estructura y navegación

- Header, Footer, Sidebar
- Componentes que definen la estructura de la página
- Navegación y elementos de layout

**Ejemplos**: `Header.tsx`, `Footer.tsx`, `Navbar.tsx`, `Sidebar.tsx`

### `/src/components/sections`

**Propósito**: Secciones específicas de la landing page

- Componentes grandes que representan secciones completas
- Hero, About, Services, Contact, etc.
- Combinan múltiples componentes UI

**Ejemplos**: `HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`

### `/src/lib`

**Propósito**: Utilidades, funciones helper y configuraciones

- Funciones reutilizables
- Configuraciones de librerías externas
- Utilidades para validaciones, formateo, etc.

**Ejemplos**: `utils.ts`, `validations.ts`, `constants.ts`, `api.ts`

### `/src/styles`

**Propósito**: Archivos de estilos globales y configuraciones CSS

- Estilos globales
- Variables CSS customizadas
- Configuraciones adicionales de Tailwind

**Ejemplos**: `globals.css`, `components.css`, `utilities.css`

### `/src/types`

**Propósito**: Definiciones de tipos TypeScript

- Interfaces y tipos compartidos
- Tipos para APIs y datos
- Definiciones de propiedades de componentes

**Ejemplos**: `index.ts`, `api.ts`, `components.ts`

## 🎯 Convenciones de Nomenclatura

### Archivos y Componentes

- **Componentes**: PascalCase (`Button.tsx`, `HeroSection.tsx`)
- **Utilidades**: camelCase (`utils.ts`, `apiHelpers.ts`)
- **Tipos**: PascalCase con sufijo (`UserType.ts`, `ApiResponse.ts`)

### Carpetas

- **Carpetas**: kebab-case (`components`, `lib`, `types`)
- **Rutas**: kebab-case (`about-us`, `contact-form`)

## 📝 Reglas para el Desarrollo

### 1. **Componentes UI** (`/src/components/ui`)

- Deben ser completamente reutilizables
- Sin dependencias de estado global
- Documentar props con TypeScript interfaces
- Incluir variantes usando Tailwind classes

### 2. **Componentes de Layout** (`/src/components/layout`)

- Responsables de la estructura visual
- Pueden consumir estado global si es necesario
- Deben ser responsive por defecto

### 3. **Componentes de Sección** (`/src/components/sections`)

- Combinan múltiples componentes UI
- Contienen la lógica específica de cada sección
- Deben ser independientes entre sí

### 4. **Utilidades** (`/src/lib`)

- Funciones puras cuando sea posible
- Documentar con JSDoc
- Incluir tests unitarios

## 🚀 Flujo de Trabajo Recomendado

1. **Crear componente UI** → Testear aisladamente
2. **Componer en secciones** → Integrar múltiples componentes UI
3. **Implementar en páginas** → Usar secciones en las rutas
4. **Optimizar y refactorizar** → Mover lógica común a `/src/lib`

## 📚 Recursos Adicionales

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)

---

**¿Dudas?** Consulta en el canal de desarrollo del equipo o revisa la documentación oficial de las tecnologías utilizadas.
