# Recarga Control (PWA)

Calculadora sencilla para **toda la recarga**, aunque ocupe octubre, noviembre y diciembre. Se instala en iPhone o Android sin necesidad de publicar en las tiendas.

## Cómo funciona
1. **Primera vez:** nombre opcional, introduce tus precios de **hora normal** y **hora extra**. La media dieta (19,50 €), el kilometraje (0,47 €/km) y la prima de recarga (625,46 €) aparecen como valores fijos no editables. El coste de compra de cinco días no aparece en Configuración (se descuenta automáticamente 300 € al activarlo). Se muestra un aviso para verificar los precios antes de continuar.
2. **Calculadora única:** escribe el total de horas normales, horas extras, medias dietas y kilómetros de **toda la recarga**.
3. Marca solo lo que corresponda: **compensar horas extraordinarias**, **prima de recarga**, **comprar cinco días de descanso** y **otros pluses**.
4. La aplicación calcula el **valor total generado bruto**, el **dinero adicional bruto** sin duplicar horas normales ya abonadas y el **dinero adicional neto estimado** (IRPF siempre editable). También muestra los días libres acumulados.

### Tarifas precargadas
- **Hora normal y hora extra:** vacías y obligatorias, cada persona introduce las suyas.
- **Media dieta (fija):** 19,50 € y **kilometraje (fijo):** 0,47 €/km. Son referencias de las tablas provinciales **2025**, no cuantías de 2026 verificadas.
- **Prima de recarga ACSA 2026 (fija):** 625,46 €; descuento automático de cinco días por 300 €, sin tarifa editable.
- **IRPF:** 23 %, editable tanto en configuración como en pantalla de resultados.
- Horas extras cobradas ×1,5; descanso ×1,75; prima económica al compensar ×0,5.
- **Seguridad Social estimada:** cotización adicional de horas extraordinarias ordinarias 4,70 %; otras primas y pluses sujetos, cálculo orientativo del 6,50 % basado en una nómina facilitada. El importe real puede variar según distribución mensual y bases.
- **Dietas/kilometraje:** se consideran exentos en el cálculo simplificado solo si cumplen sus requisitos. Si están sujetos o hay otros conceptos, puede cambiar el neto real.

## No incluye
No solicita meses/días, ni gestiona retén, ni seguros médicos, ni calcula las nóminas habituales. Las horas normales solo figuran en el **valor total generado**; ya están cobradas en las nóminas ordinarias y por eso no cuentan en el **dinero extra**.

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
