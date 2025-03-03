function(instance, properties, context) {
   (function(d){
         var s = d.createElement("script");
         /* uncomment the following line to override default position*/
         s.setAttribute("data-position", properties.position);
         /* uncomment the following line to override default size (values: small, large)*/
         s.setAttribute("data-size", properties.icon_size);
         /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
         s.setAttribute("data-language", properties.language);
         /* uncomment the following line to override color set via widget (e.g., #053f67)*/
         s.setAttribute("data-color", properties.icon_color);
         /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text)*/
         s.setAttribute("data-type", properties.icon_type);
         /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
         /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility")";*/
         /* uncomment the following line to override support on mobile devices*/
         s.setAttribute("data-mobile", properties.mobile);
         /* uncomment the following line to set custom trigger action for accessibility menu*/
         /* s.setAttribute("data-trigger", "triggerId")*/
         s.setAttribute("data-account", context.keys['Account ID']);
         s.setAttribute("src", "https://cdn.userway.org/widget.js");
         (d.body || d.head).appendChild(s);})(document)
}