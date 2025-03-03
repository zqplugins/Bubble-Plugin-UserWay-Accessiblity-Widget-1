function(instance, properties, context) {

if(properties.contrast_level != 0){
    UserWay.contrastEnable(properties.contrast_level);

}

if(properties.contrast_level == 0){
    UserWay.contrastDisable();

}


}