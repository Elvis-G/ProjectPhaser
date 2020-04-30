class SceneFin extends Phaser.Scene {
  constructor(){
    super("Fin_scene")
  }


preload(){

    this.load.spritesheet('fin_sprite','Assets/Autres/Fin_Sheet.png',{frameWidth: 800, frameHeight: 600});

}


create(){

this.fin_sprite = this.add.sprite(400,300,'fin_sprite');

this.anims.create({
  key: 'animFin',
  frames: this.anims.generateFrameNumbers('fin_sprite', {start: 0, end: 5}),
  frameRate: 5,
  loop: false
});
}

update(){
  this.fin_sprite.anims.play('animFin', true);



}

}
