class Scene2 extends Phaser.Scene {
  constructor(){
    super("2_scene")
  }


preload(){

this.load.bitmapFont('myfont','font.png','font.fnt');
this.load.image('salle_ordinateur','Assets/Lieux/Computer.png');


//////// Player assets ////////
  this.load.spritesheet('player_profil','Assets/Personnages/Joueur/Profil_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_back','Assets/Personnages/Joueur/Back_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_front','Assets/Personnages/Joueur/Front_Sheet.png',{frameWidth: 42, frameHeight: 96});
  this.load.spritesheet('player_profil_attack','Assets/Personnages/Joueur/Profil_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_back_attack','Assets/Personnages/Joueur/Back_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_front_attack','Assets/Personnages/Joueur/Front_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});

  //////// Interface assets ////////

	this.load.image("dialogue_player","Assets/Interface/Dialogue_Joueur.png");
	this.load.image("dialogue_enemy","Assets/Interface/Dialogue_Boss.png");
	this.load.image("dialogue_georges","Assets/Interface/Dialogue_Georges.png");
	this.load.image("dialogue_lise","Assets/Interface/Dialogue_Lise.png");

	this.load.image("inventaire","Assets/Interface/Inventaire.png");
	this.load.image("inventaire_select","Assets/Interface/Selected.png");

	this.load.image("battery20","Assets/Interface/Batterie_20.png");
	this.load.image("battery40","Assets/Interface/Batterie_40.png");
	this.load.image("battery60","Assets/Interface/Batterie_60.png");
	this.load.image("battery80","Assets/Interface/Batterie_80.png");
	this.load.image("battery100","Assets/Interface/Batterie_100.png");

	this.load.image("coeur_1_3","Assets/Interface/Coeur_1_3.png");
	this.load.image("coeur_2_3","Assets/Interface/Coeur_2_3.png");
	this.load.image("coeur_3_3","Assets/Interface/Coeur_3_3.png");
	this.load.image("coeur_1_4","Assets/Interface/Coeur_1_4.png");
	this.load.image("coeur_2_4","Assets/Interface/Coeur_2_4.png");
	this.load.image("coeur_3_4","Assets/Interface/Coeur_3_4.png");
	this.load.image("coeur_4_4","Assets/Interface/Coeur_4_4.png");



  this.load.image('hitbox_computer','Assets/Décors/Bordures/hitbox_computer.png');
  this.load.image('scene2_sortie','Assets/Décors/Bordures/scene2_sortie.png');
  this.load.image('scene2_bordure','Assets/Décors/Bordures/scene2_bordure.png');
  this.load.image('scene2_bordure2','Assets/Décors/Bordures/scene2_bordure2.png');
  this.load.image('scene2_bordure3','Assets/Décors/Bordures/scene2_bordure3.png');


  }


create(){

	this.salle_ordinateur = this.add.sprite(400,300,'salle_ordinateur');


//////// Déplacements ////////
  spacebar = this.input.keyboard.addKey("SPACE"); //attaque
	z = this.input.keyboard.addKey("Z"); // déplacements
	q = this.input.keyboard.addKey("Q"); // déplacements
	s = this.input.keyboard.addKey("S"); // déplacements
	d = this.input.keyboard.addKey("D"); // déplacements
	e = this.input.keyboard.addKey("E"); //action
	i = this.input.keyboard.addKey("I"); //inventaire
  echap = this.input.keyboard.addKey("ESC") //inventaire
  enter = this.input.keyboard.addKey("ENTER") //passer dialogue

//////// Switchs & bordures ////////
  platforms = this.physics.add.staticGroup ();
  platforms.create(269,300,"scene2_bordure").setScale(1).refreshBody();
  platforms.create(532,300,"scene2_bordure").setScale(1).refreshBody();
  platforms.create(400,400,"scene2_bordure2").setScale(1).refreshBody();
  platforms.create(400,228,"scene2_bordure3").setScale(1).refreshBody();

  switchs = this.physics.add.staticGroup ();
  switch2 = switchs.create(400,387,"scene2_sortie").setScale(1).refreshBody();
  ordi = switchs.create(368,227,"hitbox_computer").setScale(1).refreshBody();

//////// Timers ////////
timer_battery = this.time.addEvent({ delay: 6000, callback: functionTimer_battery, loop: true });


  //////// Caméra  ////////
  this.cameras.main.setBounds(0, 0, 2048, 2048);
  this.cameras.main.setZoom(1.3);
  this.physics.world.bounds.width = 2048;
  this.physics.world.bounds.height = 2048;

////////////////////////// Créations player ////////////////////////////////
    player = this.physics.add.sprite(406,322,'player_front').setSize(40,40).setOffset(0,50);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);
    player.setBounce(0);
    player.body.setGravityY(0);

  	this.cameras.main.startFollow(player, true, 0.1, 0.1);



this.physics.add.collider(player, platforms);
this.physics.add.overlap(player, ordi, functionBuff_Force, null, this);
this.physics.add.overlap(player, switch2, functionSwitch_Scene3, null, this);


//////// Pic Dialogues  ////////
pic_dialogue_georges = this.add.sprite(398,470,'dialogue_georges').setScrollFactor(0);
pic_dialogue_lise = this.add.sprite(398,470,'dialogue_lise').setScrollFactor(0);
pic_dialogue_enemy = this.add.sprite(398,470,'dialogue_enemy').setScrollFactor(0);
pic_dialogue_player = this.add.sprite(398,470,'dialogue_player').setScrollFactor(0);

pic_dialogue_georges.visible = false;
pic_dialogue_lise.visible = false;
pic_dialogue_enemy.visible = false;
pic_dialogue_player.visible = false;


//////// Anim player ////////
this.anims.create({
  key: 'idle_player',
  frames: this.anims.generateFrameNumbers('player_front', {start: 0, end: 0}),
  frameRate: 5,
  loop: true
});

this.anims.create({
  key: 'idle_player_back',
  frames: this.anims.generateFrameNumbers('player_back', {start: 0, end: 0}),
  frameRate: 5,
  loop: true
});

  this.anims.create({
    key: 'anim_player_profil',
    frames: this.anims.generateFrameNumbers('player_profil', {start: 0, end: 8}),
    frameRate: 8,
    loop: true
  });

  this.anims.create({
    key: 'anim_player_front',
    frames: this.anims.generateFrameNumbers('player_front', {start: 0, end: 10}),
    frameRate: 10,
    loop: true
  });

  this.anims.create({
    key: 'anim_player_back',
    frames: this.anims.generateFrameNumbers('player_back', {start: 0, end: 10}),
    frameRate: 10,
    loop: true
  });

  this.anims.create({
    key: 'anim_player_profil_attack',
    frames: this.anims.generateFrameNumbers('player_profil_attack', {start: 0, end: 9}),
    frameRate: 15,
    loop: true
  });

  this.anims.create({
    key: 'anim_player_front_attack',
    frames: this.anims.generateFrameNumbers('player_front_attack', {start: 0, end: 11}),
    frameRate: 20,
    loop: true
  });

  this.anims.create({
    key: 'anim_player_back_attack',
    frames: this.anims.generateFrameNumbers('player_back_attack', {start: 0, end: 11}),
    frameRate: 20,
    loop: false
  });

}

update(){

  ////////////////////////// DÉPLACEMENTS ////////////////////////////////

  //////// Player Déplacements ////////
  if(q.isDown & inventaire == 0){
    player.setVelocityY(0);
    player.setVelocityX(-150);
    player.anims.play("anim_player_profil", true);
    player.setFlipX(true);
    pose_coffre = 0;
  } else if (d.isDown & inventaire == 0){
    player.setVelocityY(0);
    player.setVelocityX(150);
    player.anims.play("anim_player_profil", true);
    player.setFlipX(false);
    pose_coffre = 1;
  } else if (z.isDown & inventaire == 0){
    player.setVelocityX(0);
    player.setVelocityY(-150);
    player.anims.play("anim_player_back", true);
    player.setFlipX(false);
    pose_coffre = 2;
  } else if (s.isDown & inventaire == 0){
    player.setVelocityX(0);
    player.setVelocityY(150);
    player.anims.play("anim_player_front", true);
    player.setFlipX(false);
    pose_coffre = 3;
  } else if (spacebar.isUp){
    player.setVelocityX(0);
    player.setVelocityY(0);
    player.anims.play("idle_player_back", true);
  }


  //////// Déplacements inventaire ////////
  if (Phaser.Input.Keyboard.JustDown(z) & inventaire == 1 & pic_selected.y > 356) {
    pic_selected.y-=64;
  } else if (Phaser.Input.Keyboard.JustDown(s) & inventaire == 1 & pic_selected.y < 484) {
    pic_selected.y+=64;
  } else if (Phaser.Input.Keyboard.JustDown(q) & inventaire == 1 & pic_selected.x > 536) {
    pic_selected.x-=64;
  } else if (Phaser.Input.Keyboard.JustDown(d) & inventaire == 1 & pic_selected.x < 664) {
    pic_selected.x+=64;
  }

  if (pic_selected.x == 536 & pic_selected.y == 356) {
    selected = 1;
  } else if (pic_selected.x == 600 & pic_selected.y == 356){
    selected = 2;
  } else if (pic_selected.x == 664 & pic_selected.y == 356){
    selected = 3;
  } else if (pic_selected.x == 536 & pic_selected.y == 420){
    selected = 4;
  } else if (pic_selected.x == 600 & pic_selected.y == 420){
    selected = 5;
  } else if (pic_selected.x == 664 & pic_selected.y == 420){
    selected = 6;
  } else if (pic_selected.x == 536 & pic_selected.y == 484){
    selected = 7;
  } else if (pic_selected.x == 600 & pic_selected.y == 484){
    selected = 8;
  } else if (pic_selected.x == 664 & pic_selected.y == 484){
    selected = 9;
  }


  //////// Actions ////////
  if (e.isDown & upgrade >= 1 & player.body.center.x > d1.x+70 & player.body.center.y < 900 & player.body.center.y > 740) {
    d1.x += 1;
    d1.setOffset(d1.x-135, 0)
  } else if (e.isDown & upgrade >= 1 & player.body.center.x < d1.x-70 & player.body.center.y < 900 & player.body.center.y > 740) {
    d1.x -= 1;
    d1.setOffset(d1.x-135, 0)
  } else if (e.isDown & upgrade >= 1 & player.body.center.x < d2.x-70 & player.body.center.x < 1110 & player.body.center.y < 1250 & player.body.center.y > 1100) {
    d2.x -= 1;
    d2.setOffset(d2.x-1184, 0)
  }  else if (e.isDown & upgrade >= 1 & player.body.center.x < d2.x+70 & player.body.center.y < 1250 & player.body.center.y > 1100) {
    d2.x += 1;
    d2.setOffset(d2.x-1184, 0)
  }

  if (upgrade == 2) {
    c1.destroy();
    c2.destroy();
  }


  ////////////////////////// AFFICHAGE ////////////////////////////////

  //////// Affichage Inventaire ////////
  if (i.isDown & inventaire < 2){
    inventaire = 1;
  }
  if (echap.isDown & inventaire < 2){
    inventaire = 0;
  }


  if (inventaire == 1) {
    pic_inventaire.visible = true;
    pic_selected.visible = true;
  }

  if (inventaire == 0) {
    pic_inventaire.visible = false;
    pic_selected.visible = false;
  }


  //////// Affichage Battery ////////
  if (battery > 80) {
    pic_battery.destroy();
    pic_battery = this.add.sprite(680,87,'battery100').setScrollFactor(0);
  } else if (battery > 60 & battery < 81) {
    pic_battery.destroy();
    pic_battery = this.add.sprite(680,87,'battery80').setScrollFactor(0);
  } else if (battery > 40 & battery < 61) {
    pic_battery.destroy();
    pic_battery = this.add.sprite(680,87,'battery60').setScrollFactor(0);
  } else if (battery > 20 & battery < 41) {
    pic_battery.destroy();
    pic_battery = this.add.sprite(680,87,'battery40').setScrollFactor(0);
  } else if (battery > 0 & battery < 21) {
    pic_battery.destroy();
    pic_battery = this.add.sprite(680,87,'battery20').setScrollFactor(0);
  }

  if (battery > 100){
    battery = 100;
  }


  //////// Affichage point de vie ////////
  if (pv == 4 & buff_pv == 1) {
    pic_pv.destroy();
    pic_pv = this.add.sprite(130,85,'coeur_4_4').setScrollFactor(0);
  } else if (pv == 3 & buff_pv == 1) {
    pic_pv.destroy();
    pic_pv = this.add.sprite(130,85,'coeur_3_4').setScrollFactor(0);
  } else if (pv == 2 & buff_pv == 1) {
    pic_pv.destroy();
    pic_pv = this.add.sprite(130,85,'coeur_2_4').setScrollFactor(0);
  } else if (pv == 1 & buff_pv == 1) {
    pic_pv.destroy();
    pic_pv = this.add.sprite(130,85,'coeur_1_4').setScrollFactor(0);
  } else if (pv == 3 & buff_pv == 0) {
    pic_pv.destroy();
    pic_pv = this.add.sprite(130,85,'coeur_3_3').setScrollFactor(0);
  } else if (pv == 2 & buff_pv == 0) {
    pic_pv.destroy();
    pic_pv = this.add.sprite(130,85,'coeur_2_3').setScrollFactor(0);
  } else if (pv == 1 & buff_pv == 0) {
    pic_pv.destroy();
    pic_pv = this.add.sprite(130,85,'coeur_1_3').setScrollFactor(0);
  }



if (Phaser.Input.Keyboard.JustDown(enter) & dialogue_visible == 1) {
  dialogue_coffre += 1;
}

if (dialogue_coffre == 54) {
  inventaire = 2;
  dialogue_visible = 1;
  pic_dialogue_player.visible = true;
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'je me sens comma attire par cet ordinateur, et cette \nboite a un emplacement ou je peut y instaurer mon bras... \nAllez, ca permettra peut-etre de retrouver plus vite \nla memoire.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
}  else if (dialogue_coffre == 56) {
  inventaire = 0;
  dialogue_visible = 0;
  dialogue_text.destroy();
  pic_dialogue_player.visible = false;
} else if (dialogue_coffre == 58) {
  inventaire = 2;
  dialogue_visible = 1;
  dialogue_text.destroy();
  pic_dialogue_player.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Wow, j\'ai clairement senti un courant energetique me parcourir \net l\'energie degage par mon noyau est plus importante. Ma \nforce semble elle aussi s\'etre ameliore.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 60) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Par contre, je dois etre capable de ressentir ces choses \ndu a mon enveloppe physique. Bref, y a plus rien a voir ici, \nautant retourner au camp', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 62) {
  inventaire = 0;
  dialogue_visible = 0;
  dialogue_text.destroy();
  pic_dialogue_player.visible = false;
}

}
}
