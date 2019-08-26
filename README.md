# Portal ingreso de resultados exámenes alto riesgo RedSalud

App para trabajadores del área de salud pública, específicamente para ingresar resultados de exámenes de alto riesgo que serán remitidos de forma interna a cada paciente, con el fin de mantener la información oculta sólo para que el remitente pueda abrirla.

## Funcionalidad

La app tiene un Login, en donde el trabajador previo registro, puede ingresar al portal. Cada paciente tiene un código que se le entrega al momento de hacer el examen. Éste debe ser ingresado para luego poder escribir el texto que será cifrado o descifrado según corresponda. Luego es enviado a paciente vía correo electrónico.

## Definición usuario y proceso

Al comienzo había pensado en hacer un portal para que el paciente pudiese recibir mediante correo, los resultados de exámenes de alto riesgo. En la actualidad, exámenes como el de VIH, son entregados por los hospitales públicos, sólo de forma presencial y con tu CI. Para evitar ese trámite y que el proceso siga siendo privado, existiría este portal. El problema era que el paciente sólo necesitaba descifrar y me quedaba sin argumentos para el cifrado.

Como me interesaba el tema, decidí tomarlo desde un paso antes, o sea, en la entrega de este resultado. En este caso, quien haga el ingreso de los datos, puede enviar esta información tanto a médicos tratantes como a los mismos pacientes, por lo tanto, es necesario que el portal tenga ambas opciones.

Para los pacientes, había pensado en hacer un portal más simple, en donde sólo con su código pueda acceder al descifrado de sus resultados, manteniendo la privacidad y agilizando el proceso de entrega del mismo.

## Diagramas y Mockups

### Diagramas de flujo

Los primeros **diagramas** mostraban el flujo que seguía mi primera idea. Ahora con la experiencia que tuve, logro entender que no tomé en cuenta muchos factores. Era tan simple como esto:

![Diagrama 1](https://github.com/mafda-lennon/SCL011-Cipher/blob/master/src/img1.jpg)

Luego quise simplificarlo, aún con muchas ideas dando vuelta en la cabeza, pero no logré comprender bien la idea de un diagrama de flujo, esto se puede ver en la siguiente imagen:

![Diagrama 2](https://github.com/mafda-lennon/SCL011-Cipher/blob/master/src/img2.jpg)

### Mockups

Los **mockups** también fueron bastante simples al principio y más desordenados, como se muestra en las siguientes imágenes:

![Mockup 1](https://github.com/mafda-lennon/SCL011-Cipher/blob/master/src/img3.jpg) ![Mockup 2](https://github.com/mafda-lennon/SCL011-Cipher/blob/master/src/img4.jpg)

Para cuando logré aterrizar la idea, luego de bastante feedback con mis compañeras de squad, pude hacer un mockup que se adaptara de forma más real al requerimiento. Esto se puede ver reflejado aquí:

![Mockup 3](https://github.com/mafda-lennon/SCL011-Cipher/blob/master/src/img5.jpg) ![Mockup 4](https://github.com/mafda-lennon/SCL011-Cipher/blob/master/src/img6.jpg)

De esta forma, pude tener claridad con respecto a lo que quería, así yo mismoa podía entenderlo y explicarlo. En el feedback con otros squad, se logró entender por lo que me quedé con ese diseño e idea.

## Implementación

### HTML, Js (DOM, Lógica) y CSS

En este punto sólo me remitiré a contar mi proceso, cómo me sentí, qué me costó y qué no, ya que explicar el código lo haré de forma presencial ante las coaches.

En un comienzo no lograba entender absolutamente nada. Estaba muy bloqueada, leía información del **LMS**, veía v¡deos, incluso el video de Michelle lo debo haber visto unas 6 veces antes de lograr entender qué era lo que estaba haciendo y por qué.

Esto me tenía bastante frustrada, pero la verdad es que el poder compartir ese sentimiento con mis compañeras y darme cuenta de que no estaba sola, me dio el impulso a soltar gran parte de ese temor.

Antes de empezar con el código, entendía muy bien la lógica, sólo que no lograba bajar esas ideas al ***Visual***.

Y así fue como partí. Empecé haciendo el `src/index.html` básico, para *soltar los dedos* y luego simplemente empecé a hacer pruebas en el `src/index.js`. Ponía códigos de los que había aprendido y veía cómo funcionaban (o no funcionaban *jeje*) y en un momento, me di cuenta de que había perdido el temor a escribir las ideas que tenía en mi cabeza. Esto me ayudó mucho para poder hacer preguntas cuando no entendía el código o a formular una pregunta para que pudiesen prestarme ayuda en algo específico del mismo.

Cuando logré hacer el cifrado, estaba contenta, ya que además de perder el miedo al código, había entendido mi manera de aprender y además, ahora podía comprender de mejor forma lo que leía.

Luego de tener el cifrado y descifrado listos y funcionando, lo que más me costó fue dividir entre lógica y DOM, ya que al pasar mi código de cipher a `src/cipher.js` y dejar el resto en `src/index.js`, el código dejó de funcionar.

Entre todas las vueltas que me di, todo el código que hice y que borré y con la ayuda de mis compañeras, logré hacer que volviera a funcionar ya teniendo todo en sus respectivos archivos.

Por su parte, en el `style.css` no había agregado nada y aún me faltaba eso y los test. Como no había logrado entender a cabalidad los test, decidí dejar el CSS para el fin de semana y ver en clases y junto con las coaches el tema del test.

Los testeos al principio me arrojaron varios errores de sintaxis que logré resolver, para luego dar paso a los testeos de ***encode y decode***.

Con respecto al diseño, tuve que hacer modificaciones ya que no logré hacer algunas cosas que tenía definidas en el mockup, pero por el bien de que el proyecto quedara funcionando, preferí dejarlos de lado (por ejemplo, el tema de que los botones quedaran todos uno abajo del otro, al medio de ambas textareas).

Logré que funcionara el cifrado/descifrado de espacios, no pude hacer funcionar correctamente el tema de los números, pero eso lo veré la próxima semana con más tiempo, luego de entregar.

Fue difícil, pero entendí. Fue arduo, pero aprendí. Sin el apoyo de mis compañeras, creo que me hubiese sido mucho más difícil.