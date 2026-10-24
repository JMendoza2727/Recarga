# Recargué (PWA)

Calculadora sencilla para **toda la recarga**, aunque ocupe octubre, noviembre y diciembre. Se instala en iPhone o Android sin necesidad de publicar en las tiendas.

## Cómo funciona
1. **Primera vez:** nombre opcional, horas normales y extraordinarias a precio personal, y precios de convenio precargados.
2. **Calculadora:** total de horas normales, horas extras, dietas, kilómetros, días de parada, P.T.P. y nuclear, y opciones de compensación, prima y compra de descanso.
3. **Resultado:** se muestra exclusivamente el **valor total generado bruto y neto estimado**, incluyendo horas normales y los complementos habituales (P.T.P. y nuclear). No se muestra un subtotal "extra" separado.
4. **Deducciones estimadas:** IRPF editable sobre importes salariales, cotización orientativa de horas extras (4,70 %) y del resto del salario (6,50 %); dietas y km exentos solo si cumplen los requisitos.

**Importante:** el total de la recarga no es dinero adicional a las nóminas que ya pagan el salario y complementos habituales. Evita duplicar P.T.P. y nuclear si están incluidos en el precio introducido como hora normal.

### Tarifas precargadas
- **Hora normal y hora extra:** vacías y obligatorias, cada persona introduce las suyas.
- **Media dieta (fija):** 23,83 € y **kilometraje (fijo):** 0,47 €/km. Son referencias de las tablas provinciales **2025**, no cuantías de 2026 verificadas.
- **Prima de recarga ACSA 2026 (fija):** 625,46 €; descuento automático de cinco días por 300 €, sin tarifa editable.
- **IRPF:** 23 %, editable tanto en configuración como en pantalla de resultados.
- Horas extras cobradas ×1,5; descanso ×1,75; prima económica al compensar ×0,5.
- **Seguridad Social estimada:** cotización adicional de horas extraordinarias ordinarias 4,70 %; otras primas y pluses sujetos, cálculo orientativo del 6,50 % basado en una nómina facilitada. El importe real puede variar según distribución mensual y bases.
- **Dietas/kilometraje:** se consideran exentos en el cálculo simplificado solo si cumplen sus requisitos. Si están sujetos o hay otros conceptos, puede cambiar el neto real.

## No incluye
No solicita meses/días, ni gestiona retén, ni seguros médicos, ni calcula las nóminas habituales. Las horas normales figuran en los dos totales (bruto y neto), pero normalmente ya se cobran en las nóminas ordinarias.

## Instalación de GitHub Pages
En GitHub abre **Settings → Pages** y elige **Deploy from a branch → main → /(root)**. 
URL: https://jmendoza2727.github.io/Recarga/

- **iOS:** Safari → Compartir → Añadir a pantalla de inicio.
- **Android:** Chrome → menú → Instalar.

Funciona sin conexión tras la primera visita. Datos locales mediante localStorage, sin cuenta ni envío de datos al repositorio.

## Referencias
- Tablas 2025 Tarragona: https://www.ccoo.cat/industria/wp-content/uploads/sites/109/2023/01/taules-salarials-metall-tarragona-2025.pdf
- Estado convenio Tarragona 2026: https://www.ccoo.cat/industria/conveni-de-la-industria-siderometallurgica-de-tarragona/
- Cotización 2026: https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores/10721/10957/9932/4315/4316?changeLanguage=es

La app ofrece una **estimación**, no una nómina oficial, informe fiscal o dictamen jurídico.


## Botón «Ver convenio ACS»
Se muestra en **Configuración inicial** y en **Calculadora**. Abre la página \`convenio-acsa.html\`, que detecta si existe el archivo **\`convenio-acsa-2025-2027.pdf\`** en la raíz del repositorio y lo muestra integrado. Si todavía no está subido, ofrece la ficha oficial en CIDO.

Para alojar en GitHub la copia escaneada de las 34 fotografías del convenio, abre la carpeta de archivos del proyecto, utiliza **Add file → Upload files**, elige **\`convenio-acsa-2025-2027.pdf\`** y confirma **Commit changes**. Así cualquier compañero podrá abrir el PDF desde ambos botones. No subir nóminas u otros documentos personales.

## Publicación en Netlify
El proyecto **recargacontrol** está creado en Netlify. Su dirección es **https://recargacontrol.netlify.app** cuando se publique el primer despliegue.
En https://app.netlify.com/projects/recargacontrol hay que conectar el repositorio GitHub JMendoza2727/Recarga, rama main, sin comando de compilación y con directorio de publicación . (raíz).
El proyecto incluye netlify.toml y .gitignore para evitar subir .netlify/.

## Nombre e icono
Al instalar la PWA se muestra **Recargué**, con icono azul oscuro de documento y euro. En iPhone: Safari → Compartir → Añadir a pantalla de inicio. En Android: Chrome → Instalar aplicación.

## Migración de los datos entre dominios
El almacenamiento local de github.io y netlify.app es independiente.
1. Abre la aplicación de GitHub Pages; en Editar datos pulsa **Guardar copia**.
2. Guarda el archivo recargue-mis-datos.json en el móvil.
3. Abre la nueva aplicación de Netlify, ve a Configuración y pulsa **Importar copia**.
4. Selecciona el archivo JSON, acepta la sustitución y verifica los importes antes de eliminar el acceso directo antiguo.
Los registros se guardan únicamente en cada dispositivo; nunca se envían automáticamente al servidor.

## Plus por días de parada
En la calculadora hay dos campos adicionales de **días efectivamente trabajados**:
- Plus parada laborable (lunes-viernes): **33,70 €/día**.
- Plus parada sábado, domingo y festivo: **74,15 €/día**.

Son las **tarifas publicadas para 2025 del convenio del metal de Tarragona**, utilizadas como referencia provisional para 2026 hasta que estén disponibles las nuevas tablas oficiales. Se incluyen en el dinero extra bruto y en la estimación de IRPF y cotizaciones. Un festivo que cae entre semana se introduce como festivo, no como día laborable. No se duplican las horas normales.

## P.T.P. y complemento nuclear diario
- **Días con P.T.P.:** 9,58 €/día, según nómina de referencia ACSA.
- **Días con complemento nuclear:** 6,61 €/día, según nómina de referencia ACSA.
- **Tick «No cobro complemento nuclear»:** desactiva el número de días nucleares y fija su valor calculado en cero sin eliminar lo que se hubiera escrito.
- Ambos conceptos se consideran salario habitual y entran en **el valor total bruto y neto estimado**, con sus deducciones aproximadas.
- Si la tarifa de hora normal configurada por cada trabajador ya engloba estos pluses, no conviene duplicarlos en el valor total.
