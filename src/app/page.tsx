export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24">
        {/* Título principal */}
        <h1 className="text-h1 text-primary mb-6">DevCore Group</h1>

        {/* Subtítulo */}
        <h2 className="text-h2 mb-4">
          Transformamos Ideas en Soluciones Reales
        </h2>

        {/* Párrafo principal */}
        <p className="text-body-lg max-w-2xl mb-8">
          Somos una software factory especializada en el desarrollo de
          soluciones a medida. El proyecto está listo para empezar a desarrollar
          con Roboto como tipografía principal y los colores exactos de Figma.
        </p>

        {/* Sección de demostración de colores */}
        <div className="mb-12">
          <h3 className="text-h3 mb-6">Prueba de Colores y Tipografía</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card con color primario */}
            <div className="bg-primary text-inverse p-6 rounded-xl">
              <h4 className="text-body-lg font-semibold mb-2">
                Color Primario
              </h4>
              <p className="text-body-md opacity-90">Verde Oliva #5E8D6B</p>
            </div>

            {/* Card con color secundario */}
            <div className="bg-secondary text-inverse p-6 rounded-xl">
              <h4 className="text-body-lg font-semibold mb-2">
                Color Secundario
              </h4>
              <p className="text-body-md opacity-90">Azul Petróleo #01454F</p>
            </div>

            {/* Card con color accent */}
            <div className="bg-accent text-inverse p-6 rounded-xl">
              <h4 className="text-body-lg font-semibold mb-2">Color Accent</h4>
              <p className="text-body-md opacity-90">Celeste #3383B7</p>
            </div>
          </div>

          {/* Botones de demostración */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="btn-primary">Botón Primario</button>
            <button className="btn-secondary">Botón Secundario</button>
            <button className="btn-accent">Botón Accent</button>
          </div>
        </div>

        {/* Sección de tipografía */}
        <div className="mb-12">
          <h3 className="text-h3 mb-6">Sistema Tipográfico con Roboto</h3>

          <div className="space-y-4">
            <div>
              <p className="text-body-md text-tertiary mb-2">
                text-h1 (48px, 700)
              </p>
              <h1 className="text-h1">Título Principal H1</h1>
            </div>

            <div>
              <p className="text-body-md text-tertiary mb-2">
                text-h2 (36px, 600)
              </p>
              <h2 className="text-h2">Título Secundario H2</h2>
            </div>

            <div>
              <p className="text-body-md text-tertiary mb-2">
                text-h3 (24px, 600)
              </p>
              <h3 className="text-h3">Título Terciario H3</h3>
            </div>

            <div>
              <p className="text-body-md text-tertiary mb-2">
                text-body-lg (18px, 400)
              </p>
              <p className="text-body-lg">
                Texto del cuerpo grande - Para párrafos principales y contenido
                destacado.
              </p>
            </div>

            <div>
              <p className="text-body-md text-tertiary mb-2">
                text-body-md (16px, 400)
              </p>
              <p className="text-body-md">
                Texto del cuerpo mediano - Para contenido secundario,
                descripciones y párrafos normales.
              </p>
            </div>

            <div>
              <p className="text-body-md text-tertiary mb-2">
                text-nav-link (16px, 500)
              </p>
              <a
                href="#"
                className="text-nav-link hover:text-primary transition-colors"
              >
                Enlace de Navegación
              </a>
            </div>
          </div>
        </div>

        {/* Información del proyecto */}
        <div className="bg-surface border border-subtle rounded-xl p-6">
          <h3 className="text-h3 mb-4">Estado del Proyecto</h3>
          <p className="text-body-md mb-4">
            ✅ Tailwind CSS v4 configurado correctamente
            <br />
            ✅ Tipografía Roboto implementada
            <br />
            ✅ Paleta de colores de Figma aplicada
            <br />
            ✅ Modo claro y oscuro funcional
            <br />
            ✅ Sistema de design tokens completo
            <br />✅ Dependencias actualizadas a las últimas versiones
          </p>
          <p className="text-body-lg text-primary font-semibold">
            ¡Listo para empezar a desarrollar los componentes!
          </p>
        </div>
      </div>
    </main>
  );
}
