class Scene1 extends Phaser.Scene {
  constructor(){
    super("1_scene")
  }


preload(){

this.load.bitmapFont('myfont','font.png','font.fnt');

////////////////////////// ASSETS ////////////////////////////////

    this.load.image('map','Assets/MAP.png');
	  this.load.image("night","Assets/Night_Map.png");
    this.load.spritesheet('fondu','Assets/Autres/Fondu_Sheet.png',{frameWidth: 800, frameHeight: 600});

//////// Player assets ////////
  this.load.spritesheet('player_profil','Assets/Personnages/Joueur/Profil_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_back','Assets/Personnages/Joueur/Back_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_front','Assets/Personnages/Joueur/Front_Sheet.png',{frameWidth: 42, frameHeight: 96});
  this.load.spritesheet('player_profil_attack','Assets/Personnages/Joueur/Profil_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_back_attack','Assets/Personnages/Joueur/Back_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('player_front_attack','Assets/Personnages/Joueur/Front_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});

//////// NPC assets ////////
  this.load.spritesheet('lise_profil','Assets/Personnages/Alliés/Fille_Profil_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('lise_back','Assets/Personnages/Alliés/Fille_Back_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('lise_front','Assets/Personnages/Alliés/Fille_Front_Sheet.png',{frameWidth: 42, frameHeight: 96});

  this.load.spritesheet('georges_profil','Assets/Personnages/Alliés/Papy_Profil_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('georges_back','Assets/Personnages/Alliés/Papy_Back_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('georges_front','Assets/Personnages/Alliés/Papy_Front_Sheet.png',{frameWidth: 42, frameHeight: 96});

//////// Ennemi assets ////////

  this.load.spritesheet('enemy_profil','Assets/Personnages/Ennemis/Enemy_Profil_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('enemy_back','Assets/Personnages/Ennemis/Enemy_Back_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('enemy_front','Assets/Personnages/Ennemis/Enemy_Front_Sheet.png',{frameWidth: 42, frameHeight: 96});
  this.load.spritesheet('enemy_profil_attack','Assets/Personnages/Ennemis/Enemy_Profil_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('enemy_back_attack','Assets/Personnages/Ennemis/Enemy_Back_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});
  this.load.spritesheet('enemy_front_attack','Assets/Personnages/Ennemis/Enemy_Front_Attack_Sheet.png',{frameWidth: 48, frameHeight: 96});

//////// Collectibles assets ////////

	this.load.image("coeur","Assets/Collectibles/Coeur.png");
	this.load.image("coeur_x2","Assets/Collectibles/Coeur_x2.png");
	this.load.image("capsule_energetique","Assets/Collectibles/Energie.png");
	this.load.image("capsule_energetique_x2","Assets/Collectibles/Energie_x2.png");
	this.load.image("plastron","Assets/Collectibles/Plastron.png");
	this.load.image("tonneau_coffre","Assets/Collectibles/TonneauCoffre.png");

//////// Décors assets ////////
	this.load.image("debris","Assets/Décors/Debris_x2.png");
  this.load.spritesheet('tonneau_sheet','Assets/Décors/Tonneau_Sheet.png',{frameWidth: 17, frameHeight: 35});
  this.load.spritesheet('tumbleweed','Assets/Décors/Tumbleweed_Sheet.png',{frameWidth: 64, frameHeight: 64});

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

//////// Bordures ////////
  this.load.image('bordure','Assets/Décors/Bordures/Bordure.png')
  this.load.image('bordure_1','Assets/Décors/Bordures/Bordure_1.png')
  this.load.image('bordure_2','Assets/Décors/Bordures/bordure_2.png')
  this.load.image('bordure_3','Assets/Décors/Bordures/Bordure_3.png')
  this.load.image('bordure_4','Assets/Décors/Bordures/Bordure_4.png')
  this.load.image('bordure_5','Assets/Décors/Bordures/Bordure_5.png')
  this.load.image('bordure_6','Assets/Décors/Bordures/Bordure_6.png')
  this.load.image('bordure_7','Assets/Décors/Bordures/Bordure_7.png')
  this.load.image('bordure_8','Assets/Décors/Bordures/Bordure_8.png')
  this.load.image('bordure_9','Assets/Décors/Bordures/Bordure_9.png')
  this.load.image('bordure_10','Assets/Décors/Bordures/Bordure_10.png')
  this.load.image('bordure_11','Assets/Décors/Bordures/Bordure_11.png')
  this.load.image('bordure_12','Assets/Décors/Bordures/Bordure_12.png')
  this.load.image('bordure_13','Assets/Décors/Bordures/bordure_13.png')
  this.load.image('bordure_14','Assets/Décors/Bordures/bordure_14.png')
  this.load.image('bordure_15','Assets/Décors/Bordures/bordure_15.png')
  this.load.image('bordure_16','Assets/Décors/Bordures/bordure_16.png')
  this.load.image('bordure_17','Assets/Décors/Bordures/bordure_17.png')
  this.load.image('bordure_18','Assets/Décors/Bordures/bordure_18.png')
  this.load.image('bordure_19','Assets/Décors/Bordures/bordure_19.png')
  this.load.image('bordure_20','Assets/Décors/Bordures/bordure_20.png')
  this.load.image('bordure_21','Assets/Décors/Bordures/bordure_21.png')
  this.load.image('bordure_22','Assets/Décors/Bordures/bordure_22.png')
  this.load.image('bordure_23','Assets/Décors/Bordures/bordure_23.png')
  this.load.image('bordure_24','Assets/Décors/Bordures/bordure_24.png')
  this.load.image('bordure_25','Assets/Décors/Bordures/bordure_25.png')
  this.load.image('bordure_26','Assets/Décors/Bordures/bordure_26.png')
  this.load.image('bordure_27','Assets/Décors/Bordures/bordure_27.png')

  this.load.image('hitbox_cactus','Assets/Décors/Bordures/hitbox_cactus.png')
  this.load.image('hitbox_door','Assets/Décors/Bordures/hitbox_door.png');

}


create(){

////////////////////////// TOUCHES DÉPLACEMENTS, ATTAQUE, INVENTAIRE ////////////////////////////////
cursors = this.input.keyboard.createCursorKeys();

	spacebar = this.input.keyboard.addKey("SPACE"); //attaque
	z = this.input.keyboard.addKey("Z"); // déplacements
	q = this.input.keyboard.addKey("Q"); // déplacements
	s = this.input.keyboard.addKey("S"); // déplacements
	d = this.input.keyboard.addKey("D"); // déplacements
	e = this.input.keyboard.addKey("E"); //action
	i = this.input.keyboard.addKey("I"); //inventaire
  echap = this.input.keyboard.addKey("ESC") //inventaire
  enter = this.input.keyboard.addKey("ENTER") //passer dialogue

////////////////////////// MISE EN PLACE ASSETS ////////////////////////////////

//////// Background ////////
this.map = this.add.sprite(1024,1024,'map');

//////// bordures ////////

platforms = this.physics.add.staticGroup ();
  platforms.create(140,1998,"bordure").setScale(1).refreshBody();
  platforms.create(194,1560,"bordure_1").setScale(1).refreshBody();
  platforms.create(144,1705,"bordure_2").setScale(1).refreshBody();
  platforms.create(546,2032,"bordure_3").setScale(1).refreshBody();
  platforms.create(815,1950,"bordure_4").setScale(1).refreshBody();
  platforms.create(1024,1872,"bordure_5").setScale(1).refreshBody();
  platforms.create(1230,1788,"bordure_6").setScale(1).refreshBody();
  platforms.create(1381,1711,"bordure_7").setScale(1).refreshBody();
  platforms.create(1521,1838,"bordure_8").setScale(1).refreshBody();
  platforms.create(1650,1970,"bordure_9").setScale(1).refreshBody();
  platforms.create(1775,1889,"bordure_10").setScale(1).refreshBody();
  platforms.create(1907,1808,"bordure_11").setScale(1).refreshBody();
  platforms.create(2032,1730,"bordure_12").setScale(1).refreshBody();
  platforms.create(115,1227,"bordure_13").setScale(1).refreshBody();
  platforms.create(57,898,"bordure_14").setScale(1).refreshBody();
  platforms.create(16,834,"bordure_15").setScale(1).refreshBody();
  platforms.create(97,740,"bordure_1").setScale(1).refreshBody();
  platforms.create(177,638,"bordure_8").setScale(1).refreshBody();
  platforms.create(177,427,"bordure_8").setScale(1).refreshBody();
  platforms.create(219,324,"bordure_25").setScale(1).refreshBody();
  platforms.create(306,210,"bordure_16").setScale(1).refreshBody();
  platforms.create(445,37,"bordure_17").setScale(1).refreshBody();
  platforms.create(592,115,"bordure_18").setScale(1).refreshBody();
  platforms.create(624,114,"bordure_19").setScale(1).refreshBody();
  platforms.create(688,84,"bordure_19").setScale(1).refreshBody();
  platforms.create(853,37,"bordure_17").setScale(1).refreshBody();
  platforms.create(974,180,"bordure_16").setScale(1).refreshBody();
  platforms.create(2022,324,"bordure_14").setScale(1).refreshBody();
  platforms.create(1069,652,"bordure_13").setScale(1).refreshBody();
  platforms.create(1038,866,"bordure_20").setScale(1).refreshBody();
  platforms.create(1005,1008,"bordure_16").setScale(1).refreshBody();
  platforms.create(1103,1125,"bordure_21").setScale(1).refreshBody();
  platforms.create(1201,946,"bordure_22").setScale(1).refreshBody();
  platforms.create(1345,709,"bordure_17").setScale(1).refreshBody();
  platforms.create(1490,530,"bordure_22").setScale(1).refreshBody();
  platforms.create(1361,321,"bordure_9").setScale(1).refreshBody();
  platforms.create(1265,273,"bordure_18").setScale(1).refreshBody();
  platforms.create(1361,196,"bordure_9").setScale(1).refreshBody();
  platforms.create(1489,177,"bordure_18").setScale(1).refreshBody();
  platforms.create(1632,100,"bordure_17").setScale(1).refreshBody();
  platforms.create(1777,175,"bordure_23").setScale(1).refreshBody();
  platforms.create(1903,207,"bordure_12").setScale(1).refreshBody();
  platforms.create(1935,501,"bordure_22").setScale(1).refreshBody();
  platforms.create(1887,706,"bordure_14").setScale(1).refreshBody();
  platforms.create(1839,916,"bordure_22").setScale(1).refreshBody();
  platforms.create(1631,1121,"bordure_24").setScale(1).refreshBody();
  platforms.create(1423,1201,"bordure_6").setScale(1).refreshBody();
  platforms.create(1214,1282,"bordure_24").setScale(1).refreshBody();
  platforms.create(1071,1250,"bordure_25").setScale(1).refreshBody();
  platforms.create(1008,1414,"bordure_26").setScale(1).refreshBody();
  platforms.create(1153,1544,"bordure_7").setScale(1).refreshBody();
  platforms.create(1360,1575,"bordure_21").setScale(1).refreshBody();
  platforms.create(1458,1521,"bordure_6").setScale(1).refreshBody();
  platforms.create(1535,1414,"bordure_1").setScale(1).refreshBody();
  platforms.create(1617,1364,"bordure_10").setScale(1).refreshBody();
  platforms.create(1824,1256,"bordure_24").setScale(1).refreshBody();
  platforms.create(2030,1427,"bordure_16").setScale(1).refreshBody();
  platforms.create(1010,322,"bordure_25").setScale(1).refreshBody();

  platforms.create(609,1783,"bordure_1").setScale(1).refreshBody();
  platforms.create(609,1650,"bordure_1").setScale(1).refreshBody();
  platforms.create(689,1731,"bordure_12").setScale(1).refreshBody();
  platforms.create(528,1731,"bordure_12").setScale(1).refreshBody();

  platforms.create(1599,950,"bordure_25").setScale(1).refreshBody();
  platforms.create(1599,850,"bordure_25").setScale(1).refreshBody();
  platforms.create(1536,913,"bordure_15").setScale(1).refreshBody();
  platforms.create(1664,913,"bordure_15").setScale(1).refreshBody();

  platforms.create(512,1299,"bordure_1").setScale(1).refreshBody();
  platforms.create(593,1250,"bordure_6").setScale(1).refreshBody();
  platforms.create(671,1139,"bordure_1").setScale(1).refreshBody();
  platforms.create(753,959,"bordure_22").setScale(1).refreshBody();
  platforms.create(609,754,"bordure_17").setScale(1).refreshBody();
  platforms.create(462,911,"bordure_26").setScale(1).refreshBody();
  platforms.create(430,1183,"bordure_16").setScale(1).refreshBody();

  platforms.create(672,582,"bordure_1").setScale(1).refreshBody();
  platforms.create(153,497,"bordure_27").setScale(1).refreshBody();
  platforms.create(626,385,"bordure_11").setScale(1).refreshBody();
  platforms.create(543,421,"bordure_1").setScale(1).refreshBody();
  platforms.create(592,530,"bordure_4").setScale(1).refreshBody();
  platforms.create(753,496,"bordure_8").setScale(1).refreshBody();

  platforms.create(110,899,"bordure_20").setScale(1).refreshBody();
  platforms.create(174,769,"bordure_20").setScale(1).refreshBody();
  platforms.create(262,1571,"bordure_20").setScale(1).refreshBody();
  platforms.create(530,1652,"bordure_20").setScale(1).refreshBody();
  platforms.create(686,1652,"bordure_20").setScale(1).refreshBody();
  platforms.create(817,1872,"bordure_20").setScale(1).refreshBody();
  platforms.create(1236,1712,"bordure_20").setScale(1).refreshBody();
  platforms.create(1518,1712,"bordure_20").setScale(1).refreshBody();
  platforms.create(1778,1811,"bordure_20").setScale(1).refreshBody();

  platforms.create(434,1040,"bordure_20").setScale(1).refreshBody();
  platforms.create(466,755,"bordure_20").setScale(1).refreshBody();
  platforms.create(750,755,"bordure_20").setScale(1).refreshBody();
  platforms.create(498,386,"bordure_20").setScale(1).refreshBody();
  platforms.create(1011,867,"bordure_20").setScale(1).refreshBody();
  platforms.create(1011,1250,"bordure_20").setScale(1).refreshBody();
  platforms.create(1134,1250,"bordure_20").setScale(1).refreshBody();

  platforms.create(1426,1122,"bordure_20").setScale(1).refreshBody();
  platforms.create(1538,850,"bordure_20").setScale(1).refreshBody();
  platforms.create(1662,850,"bordure_20").setScale(1).refreshBody();
  platforms.create(1842,706,"bordure_20").setScale(1).refreshBody();
  platforms.create(1486,323,"bordure_20").setScale(1).refreshBody();
  platforms.create(1906,289,"bordure_20").setScale(1).refreshBody();


//////// débris ; tapis_cactus ; tonneau ; switch ////////

  d1 = platforms.create(135,834,"debris").setScale(1).refreshBody();
  d2 = platforms.create(1184,1195,"debris").setScale(1).refreshBody();
  c1 = platforms.create(1375,1644,"hitbox_cactus").setScale(1).refreshBody();
  c2 = platforms.create(1413,271,"hitbox_cactus").setScale(1).refreshBody();


  switchs = this.physics.add.staticGroup ();
  switch1 = switchs.create(1777,270,"hitbox_door").setScale(1).refreshBody();
  t1 = switchs.create(447,96,"tonneau_coffre").setScale(1).refreshBody().setOffset(0,-20);
  t2 = switchs.create(890,126,"tonneau_coffre").setScale(1).refreshBody().setOffset(0,-20);
  plastron = switchs.create(1311,274,'plastron').setScale(1).refreshBody();
  heart_hide = switchs.create(59,844,'coeur').setScale(1).refreshBody();


tumbleweed = this.add.sprite(10,350,'tumbleweed').setScrollFactor(0)
tonneau_fire = platforms.create(775,1985,"tonneau_sheet").setScale(1.5).refreshBody();
tonneau_fire2 = platforms.create(533,1990,"tonneau_sheet").setScale(1.5).refreshBody();
fondu = this.add.sprite(250,1800,'fondu');

////////////////////////// FIN ASSETS : FIN ASSETS ////////////////////////////////

//////// Timers ////////
timer_invincible = this.time.addEvent({ delay: 1500, callback: functionInvincible, loop: true });
timer_fondu = this.time.addEvent({ delay: 4000, callback: functionFondu, loop: false });
timer_battery = this.time.addEvent({ delay: 3000, callback: functionTimer_battery, loop: true });
timer_tumbleSpeed = this.time.addEvent({ delay: 50, callback: functiontumbleSpeed, loop: true });
timer_tumbleGenerate = this.time.addEvent({ delay: 30000, callback: functiontumbleGenerate, loop: true });

//////// Caméra  ////////
this.cameras.main.setBounds(0, 0, 2048, 2048);
this.cameras.main.setZoom(1.3);
this.physics.world.bounds.width = 2048;
this.physics.world.bounds.height = 2048;



////////////////////////// Créations player + enemy + npc ////////////////////////////////
  player = this.physics.add.sprite(50,1880,'player_front').setSize(40,40).setOffset(0,50);
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);
  player.setBounce(0);
  player.body.setGravityY(0);

	this.cameras.main.startFollow(player, true, 0.1, 0.1);

  npc_georges = this.physics.add.sprite(585,1916,'georges_front').setSize(40,40).setOffset(0,50);
  npc_georges.setCollideWorldBounds(true);
  this.physics.add.collider(npc_georges, platforms);
  npc_georges.setBounce(0);
  npc_georges.body.setGravityY(0);

  npc_lise = this.physics.add.sprite(695,1969,'lise_front').setSize(40,40).setOffset(0,50);
  npc_lise.setCollideWorldBounds(true);
  this.physics.add.collider(npc_lise, platforms);
  npc_lise.setBounce(0);
  npc_lise.body.setGravityY(0);


  enemys = this.physics.add.group();
  this.physics.add.collider(enemys, platforms);

  enemy = enemys.create(195, 1200, 'enemy_front');
  enemy.setCollideWorldBounds(true);
  enemy.setBounce(0);
  enemy.body.setGravityY(0);

  enemy = enemys.create(860, 1285, 'enemy_front');
  enemy.setCollideWorldBounds(true);
  enemy.setBounce(0);
  enemy.body.setGravityY(0);

  enemy = enemys.create(495, 645, 'enemy_front');
  enemy.setCollideWorldBounds(true);
  enemy.setBounce(0);
  enemy.body.setGravityY(0);

  enemy = enemys.create(1010, 555, 'enemy_front');
  enemy.setCollideWorldBounds(true);
  enemy.setBounce(0);
  enemy.body.setGravityY(0);

  enemy = enemys.create(440, 295, 'enemy_front');
  enemy.setCollideWorldBounds(true);
  enemy.setBounce(0);
  enemy.body.setGravityY(0);

  enemy = enemys.create(815, 245, 'enemy_front');
  enemy.setCollideWorldBounds(true);
  enemy.setBounce(0);
  enemy.body.setGravityY(0);

//////// Fonctions  ////////
  this.physics.add.overlap(player, switch1, functionSwitch_Scene2, null, this);
  this.physics.add.overlap(player, t1, functionTonneau1, null, this);
  this.physics.add.overlap(player, t2, functionTonneau2, null, this);
  this.physics.add.overlap(player, plastron, functionBuff_Vie, null, this);
  this.physics.add.overlap(player, heart_hide, functionHeart, null, this);

  this.physics.add.collider(player, enemys, functionEnemy_hitbox, null, this);

//////// PV, Battery, Dialogues Assets  ////////
  pic_pv = this.add.sprite(130,85,'coeur_3_3').setScrollFactor(0);
  pic_battery = this.add.sprite(680,87,'battery100').setScrollFactor(0);
  pic_inventaire = this.add.sprite(600,420,'inventaire').setScrollFactor(0);
  pic_selected = this.add.sprite(664,484,'inventaire_select').setScrollFactor(0);


  coeur_pic = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic.visible = false;
  capsule_energetique_pic = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic.visible = false;

  coeur_pic2 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic2.visible = false;
  capsule_energetique_pic2 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic2.visible = false;

  coeur_pic3 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic3.visible = false;
  capsule_energetique_pic3 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic3.visible = false;

  coeur_pic4 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic4.visible = false;
  capsule_energetique_pic4 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic4.visible = false;

  coeur_pic5 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic5.visible = false;
  capsule_energetique_pic5 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic5.visible = false;

  coeur_pic6 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic6.visible = false;
  capsule_energetique_pic6 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic6.visible = false;

  coeur_pic7 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic7.visible = false;
  capsule_energetique_pic7 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic7.visible = false;

  coeur_pic8 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic8.visible = false;
  capsule_energetique_pic8 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic8.visible = false;

  coeur_pic9 = this.add.sprite(535,355,'coeur_x2').setScrollFactor(0);
  coeur_pic9.visible = false;
  capsule_energetique_pic9 = this.add.sprite(535,355,'capsule_energetique_x2').setScrollFactor(0);
  capsule_energetique_pic9.visible = false;



  pic_dialogue_georges = this.add.sprite(398,470,'dialogue_georges').setScrollFactor(0);
  pic_dialogue_lise = this.add.sprite(398,470,'dialogue_lise').setScrollFactor(0);
  pic_dialogue_enemy = this.add.sprite(398,470,'dialogue_enemy').setScrollFactor(0);
  pic_dialogue_player = this.add.sprite(398,470,'dialogue_player').setScrollFactor(0);

  pic_dialogue_georges.visible = false;
  pic_dialogue_lise.visible = false;
  pic_dialogue_enemy.visible = false;
  pic_dialogue_player.visible = false;

////////////////////////// ANIMATION ////////////////////////////////

//////// Anim player ////////
this.anims.create({
  key: 'idle_player',
  frames: this.anims.generateFrameNumbers('player_front', {start: 0, end: 0}),
  frameRate: 5,
  loop: true
});

this.anims.create({
  key: 'idle_player_profil',
  frames: this.anims.generateFrameNumbers('player_profil', {start: 0, end: 0}),
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
    frameRate: 25,
    loop: true
  });

  this.anims.create({
    key: 'anim_player_front_attack',
    frames: this.anims.generateFrameNumbers('player_front_attack', {start: 0, end: 11}),
    frameRate: 30,
    loop: true
  });

  this.anims.create({
    key: 'anim_player_back_attack',
    frames: this.anims.generateFrameNumbers('player_back_attack', {start: 0, end: 11}),
    frameRate: 30,
    loop: false
  });


//////// Anim NPC ////////
this.anims.create({
  key: 'idle_lise',
  frames: this.anims.generateFrameNumbers('lise_front', {start: 0, end: 0}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_lise_profil',
  frames: this.anims.generateFrameNumbers('lise_profil', {start: 0, end: 8}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_lise_front',
  frames: this.anims.generateFrameNumbers('lise_front', {start: 0, end: 10}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_lise_back',
  frames: this.anims.generateFrameNumbers('lise_back', {start: 0, end: 10}),
  frameRate: 10,
  loop: true
});


this.anims.create({
  key: 'idle_georges',
  frames: this.anims.generateFrameNumbers('georges_front', {start: 0, end: 0}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_georges_profil',
  frames: this.anims.generateFrameNumbers('georges_profil', {start: 0, end: 8}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_georges_front',
  frames: this.anims.generateFrameNumbers('georges_front', {start: 0, end: 10}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_georges_back',
  frames: this.anims.generateFrameNumbers('georges_back', {start: 0, end: 10}),
  frameRate: 10,
  loop: true
});


//////// Anim Ennemi ////////
this.anims.create({
  key: 'anim_enemy_profil',
  frames: this.anims.generateFrameNumbers('enemy_profil', {start: 0, end: 8}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_enemy_front',
  frames: this.anims.generateFrameNumbers('enemy_front', {start: 0, end: 10}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_enemy_back',
  frames: this.anims.generateFrameNumbers('enemy_back', {start: 0, end: 10}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_enemy_profil_attack',
  frames: this.anims.generateFrameNumbers('enemy_profil_attack', {start: 0, end: 9}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_enemy_front_attack',
  frames: this.anims.generateFrameNumbers('enemy_front_attack', {start: 0, end: 11}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_enemy_back_attack',
  frames: this.anims.generateFrameNumbers('enemy_back_attack', {start: 0, end: 11}),
  frameRate: 10,
  loop: true
});



//////// Anim Décors ou autres ////////
this.anims.create({
  key: 'anim_tonneau',
  frames: this.anims.generateFrameNumbers('tonneau_sheet', {start: 0, end: 4}),
  frameRate: 10,
  loop: true
});

this.anims.create({
  key: 'anim_tumbleweed',
  frames: this.anims.generateFrameNumbers('tumbleweed', {start: 0, end: 6}),
  frameRate: 5,
  loop: true
});

this.anims.create({
  key: 'anim_fondu',
  frames: this.anims.generateFrameNumbers('fondu', {start: 0, end: 5}),
  frameRate: 5,
  loop: false
});


fondu.anims.play('anim_fondu', true);

}


update(){

tumbleweed.anims.play('anim_tumbleweed', true);
tonneau_fire.anims.play('anim_tonneau', true);
tonneau_fire2.anims.play('anim_tonneau', true);

//////// Glitchs & bug corrections ////////
  if (dialogue_coffre == 55) {
    dialogue_coffre -= 1;
  }

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
  player.anims.play("idle_player", true);
}

//////// Player Attack ////////
// pose_coffre = 0 si profil droit ; pose_coffre = 1 si profil gauche ; pose_coffre = 2 si back ; pose_coffre = 3 si front
if (spacebar.isDown & pose_coffre == 0 & inventaire == 0){
    player.anims.play("anim_player_profil_attack", true);
    player.setFlipX(true);
    attack_coffre = 1;
    player.setVelocityX(0);
    player.setVelocityY(0);
} else if (spacebar.isDown & pose_coffre == 1 & inventaire == 0) {
    player.anims.play("anim_player_profil_attack", true);
    player.setFlipX(false);
    attack_coffre = 1;
    player.setVelocityX(0);
    player.setVelocityY(0);
} else if (spacebar.isDown & pose_coffre == 2 & inventaire == 0) {
    player.anims.play("anim_player_back_attack", true);
    attack_coffre = 1;
    player.setVelocityX(0);
    player.setVelocityY(0);
} else if (spacebar.isDown & pose_coffre == 3 & inventaire == 0) {
    player.anims.play("anim_player_front_attack", true);
    attack_coffre = 1;
    player.setVelocityX(0);
    player.setVelocityY(0);
} else {
    attack_coffre = 0;
}

//////// Player Hitbox ////////
if (attack_coffre == 1 && pose_coffre == 0){
  player.setSize(65,95).setOffset(-25,0);
} else if (attack_coffre == 1 && pose_coffre == 1) {
  player.setSize(65,95).setOffset(0,0);
} else if (attack_coffre == 1 && pose_coffre == 2) {
  player.setSize(55,90).setOffset(-10,-30);
} else if (attack_coffre == 1 && pose_coffre == 3) {
  player.setSize(55,90).setOffset(-5,35);
} else {
  player.setSize(40,40).setOffset(0,50);
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


//////// Collectibles ////////
if (coffre == 1) {
  loot = Phaser.Math.Between(1,2);
  if (loot == 1) {
    collectibles = switchs.create(coffre_x,coffre_y,'coeur').setScale(1).refreshBody();
    coffre = 0;
    this.physics.add.overlap(player, collectibles, functionCollect, null, this);
  } else if (loot ==2) {
    collectibles = switchs.create(coffre_x,coffre_y,'capsule_energetique').setScale(1).refreshBody();
    coffre = 0;
    this.physics.add.overlap(player, collectibles, functionCollect, null, this);
  }
}

////////////////////////// ACTIONS ////////////////////////////////

//////// Pouvoir Aimant ////////
if (e.isDown & upgrade >= 1 & player.body.center.x > d1.x+70 & player.body.center.y < 900 & player.body.center.y > 740) {
  d1.x += 1;
  d1.setOffset(d1.x-135, 0)
  player.anims.play("idle_player_profil", true);
  player.setFlipX(true);
} else if (e.isDown & upgrade >= 1 & player.body.center.x < d1.x-70 & player.body.center.y < 900 & player.body.center.y > 740) {
  d1.x -= 1;
  d1.setOffset(d1.x-135, 0)
  player.anims.play("idle_player_profil", true);
  player.setFlipX(false);
} else if (e.isDown & upgrade >= 1 & player.body.center.x < d2.x-70 & player.body.center.x < 1110 & player.body.center.y < 1250 & player.body.center.y > 1100) {
  d2.x -= 1;
  d2.setOffset(d2.x-1184, 0)
  player.anims.play("idle_player_profil", true);
  player.setFlipX(false);
}  else if (e.isDown & upgrade >= 1 & player.body.center.x < d2.x+70 & player.body.center.y < 1250 & player.body.center.y > 1100) {
  d2.x += 1;
  d2.setOffset(d2.x-1184, 0)
  player.anims.play("idle_player_profil", true);
  player.setFlipX(true);
}

//////// Pouvoir Courir sur les murs ////////
if (upgrade == 2) {
  c1.destroy();
  c2.destroy();
}

//////// Choix inventaire ////////
if (Phaser.Input.Keyboard.JustDown(e) & inventaire == 1){
  function_choixInventaire ();
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


//////// Limite Battery et PV ////////
if (battery > 100){
  battery = 100;
}

if (pv > 3 & buff_pv == 0) {
  pv = 3;
} else if (pv > 4 & buff_pv == 1) {
  pv = 4;
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



//////// Statut de la game ////////

 if (battery == 0 || pv == 0) {
  game = 1;
}

if (game == 1){
  this.scene.start("Fin_scene");
}







////////////////////////// DIALOGUES ////////////////////////////////
if (Phaser.Input.Keyboard.JustDown(enter) & dialogue_visible == 1) {
  dialogue_coffre += 1;
}

if (dialogue_coffre == 0) {
  inventaire = 2;
  dialogue_visible = 1;
  pic_dialogue_player.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Ou suis-je ? Pourquoi est-ce que je suis dans un dese...\nAaaaaaah!!! C\'est pas possible, qu\'est-ce que je fous dans\nun putain de robot, me dites pas que je suis dans le \nNo man\'s Land, par pitie. [Appuyer sur Entrer pour passer].', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 2) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'J\'ai rien fait, je merite pas ca, c\'est quoi encore ces \nconneries... Bon, deja faut que j\'essayes de comprendre \ncomment je me suis trouve ici mais surtout survivre dans ce \nmilieu atroce.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
}

if (dialogue_coffre == 4 & player.x < 400 & dialogue_visible == 1) {
  inventaire = 0;
  dialogue_visible = 0;
  dialogue_text.destroy();
  pic_dialogue_player.visible = false;
} else if (dialogue_coffre == 4 & player.x > 400) {
  inventaire = 2;
  dialogue_visible = 1;
  pic_dialogue_georges.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Hey, tu viens d\'atterir ici n\'est-ce pas ? Promets moi \nune chose, ne t\'attaque pas a la personne a ma droite si tu \nes hostile. C\'est une petite fille qui s\'est retrouve dans \nce merdier, donc epargne la s\'il te plait.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 6) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = false;
  pic_dialogue_player.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Hey, hey, je suis pas hostile, j\'essaye juste de comprendre \npour quel raison je me suis retrouve ici. Normalement, \nce sont les criminels qui voient leur conscience inscerer \nau sein de robot humanoide pour ensuite etre delaisse dans', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 8) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'ce fameux No Man\'s land. Seul probleme, j\'ai aucun souvenir.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 10) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = true;
  pic_dialogue_player.visible = false;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Oh, c\'est relativement normal, au cours des premiers jours, \nta memoire se voit etre impacte suite au transfert, mais \nau fur et a mesure du temps celle-ci va revenir et tu vas \npouvoir enfin comprendre le pourquoi de ta presence ici.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 12) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Bien que leur systeme semble assez stupide pour implique une \nfille de treize ans.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 14) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = false;
  pic_dialogue_player.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Ok merci, d\'ailleurs excuse-moi je me suis pas presente, je \nm\'appelle Ares et je suis bien content de n\'etre \npas tombe sur un criminel, ce qui equivaut au jackpot \ndans cet endroit.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 16) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = true;
  pic_dialogue_player.visible = false;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Normal Ares, et en effet tu as eu une sacre chance car cette \nZone est domine par une faction nomme les Red-S. Ils \nattaquent a vue et ont perdu le peu de valeur humaine qu\'ils \navaient au vue de leur hostilite envers n\'importe quel ', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 18) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'individu etrange a leur groupe.Ah oui et pour le No Man\'s \nLand, il est divise en de nombreuses zones et nous on \nse trouve dans la ZoneA1.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 20) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = false;
  pic_dialogue_player.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Ok merci pour l\'information, tu leur a deja fait face ?', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 22) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = true;
  pic_dialogue_player.visible = false;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Faire face s\'est vite dit, comme tu peux le voir, j\'ai a \npeine reussi a m\'echapper face a eux et j\'y ai laisse mon \nbras droit... Je sais que ça parait premature mais j\'ai \nbesoin de ton aide. C\'est irrespectueux et je comprendrais', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 24) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'que refuses mais nos enveloppes robotiques sont dotes \nd\'une batterie et celle-ci doit constamment etre recharge \na l\'aide de capsule energetique. Le probleme c\'est qu\'on en \na plus en stock et qu\'on est presque vide.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 26) {
  dialogue_text.destroy();
  pic_dialogue_lise.visible = true;
  pic_dialogue_georges.visible = false;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'S\'il vous plait monsieur, desoler de vous demander ca \nmais aidez nous, papy est blesse et je veux pas le \nvoir mourir en voulant me sauver. C\'est egoiste mais \ns\'il-vous-plait, aidez-nous.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 28) {
  dialogue_text.destroy();
  pic_dialogue_player.visible = true;
  pic_dialogue_lise.visible = false;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'D\'accord, d\'accord, par contre il va me falloir de quoi \nme defendre au vu de tes dires et dans quel direction \nje dois me diriger pour les trouver ces capsules ?', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 30) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = true;
  pic_dialogue_player.visible = false;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Merci beaucoup. Pour l\'arme voila un tuyau metallique, \nils sont tres peu equipe en face donc ca devrait faire \nl\'affaire [Press SpaceBar To Attack]. J\'ai pas explore \nle nord, vu que plusieurs membres "Red-S" s\'y trouvent', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 32) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'mais je suis sure qu\'il y a des capsules energetiques la-bas \nSi tu recuperes des objets sur tes ennemis, ramasse les et \ntu pourras les utiliser en ouvrant ton inventaire [Press I] \npuis [Press E] lorsqu\'il est selectionne. Bonne chance.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 34) {
  dialogue_text.destroy();
  pic_dialogue_lise.visible = true;
  pic_dialogue_georges.visible = false;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Bonne chance!', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 36 & dialogue_visible == 1) {
  inventaire = 0;
  dialogue_visible = 0;
  dialogue_text.destroy();
  pic_dialogue_lise.visible = false;
} else if (dialogue_coffre == 38) {
  inventaire = 2;
  dialogue_visible = 1;
  dialogue_text.destroy();
  pic_dialogue_lise.visible = false;
  pic_dialogue_player.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Ok c\'est bon j\'ai les capsules.', 12).setScrollFactor(0);

  dialogue_coffre += 1;
} else if (dialogue_coffre == 40 & dialogue_visible == 1) {
  inventaire = 0;
  dialogue_visible = 0;
  dialogue_text.destroy();
  pic_dialogue_player.visible = false;
} else if (dialogue_coffre == 42) {
  inventaire = 2;
  dialogue_visible = 1;
  dialogue_text.destroy();
  pic_dialogue_player.visible = false;
  pic_dialogue_georges.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Merci, tu viens de nous sauver la vie. Pose toi ici \npour la nuit, bien qu\'on est pas le besoin de dormir, \nreposer son esprit reste important.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 44) {
  inventaire = 0;
  dialogue_visible = 0;
  dialogue_text.destroy();
  pic_dialogue_georges.visible = false;
  player.x = 500;
  player.y = 1853;
  npc_georges.x = 560
  npc_georges.y = 1853;
  npc_lise.destroy();
} else if (dialogue_coffre == 46) {
  inventaire = 2;
  dialogue_visible = 1;
  dialogue_text.destroy();
  pic_dialogue_georges.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Ares, je sais pas si tu me fais confiance mais je te demande \nde me l\'accorder, tu vois cette zone en haut a droite, \nle tas de cendres et de detritus ? Il est possible de le \ndeplacer a l\'aide de ca [Vous montre une sorte d\'aimant],', 12).setScrollFactor(0);
  dialogue_coffre += 1;

  this.cameras.main.setZoom(1.3);
	this.cameras.main.startFollow(d2, true, 0.1, 0.1);
} else if (dialogue_coffre == 48) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'laisse moi te l\'installer sur ton armure, ca t\'aidera a \nl\'avenir. Je peux malheureusement pas l\'utiliser moi-meme \npuisqu\'il doit etre installe sur le bras droit, \nbras que je n\'est plus...', 12).setScrollFactor(0);
  dialogue_coffre += 1;

  this.cameras.main.setZoom(1.3);
	this.cameras.main.startFollow(player, true, 0.1, 0.1);
} else if (dialogue_coffre == 50) {
  dialogue_text.destroy();
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Voila s\'est fait, je sais pas ce qu\'il y a de l\'autre \ncote, ce qui est sure, c\'est tu croisera surement aucun \nennemi, encore plus au court de la nuit.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 52) {
  dialogue_text.destroy();
  pic_dialogue_georges.visible = false;
  pic_dialogue_player.visible = true;
  dialogue_text = this.add.bitmapText(242, 456, 'myfont', 'Je suppose que je vais allez regarder ca.', 12).setScrollFactor(0);
  dialogue_coffre += 1;
} else if (dialogue_coffre == 54 & dialogue_visible == 1) {
  inventaire = 0;
  dialogue_visible = 0;
  dialogue_text.destroy();
  pic_dialogue_player.visible = false;
  upgrade = 1;
}

if (dialogue_coffre == 40 & player. x > 450 & player.y > 1800) {
  dialogue_coffre +=2;
}

if (dialogue_coffre == 44) {
  fondu_coffre = 0;
  fondu = this.add.sprite(400,300,'fondu').setScrollFactor(0);
  fondu.anims.play('anim_fondu', true);
  night = this.add.sprite(1024,1024,'night');
  dialogue_coffre +=2;
}

if (dialogue_coffre == 64 & player. x > 1700) {
  dialogue_coffre +=2;
}


//Inventaire montré

if (inventaire == 1) {
  if (inventaire_case_pic[1] == 1){
  coeur[1].visible = true;
}
if (inventaire_case_pic[2] == 1) {
  coeur[2].visible = true;
}
if (inventaire_case_pic[3] == 1) {
  coeur[3].visible = true;
}
if (inventaire_case_pic[4] == 1) {
  coeur[4].visible = true;
}
if (inventaire_case_pic[5] == 1) {
  coeur[5].visible = true;
}
if (inventaire_case_pic[6] == 1) {
  coeur[6].visible = true;
}
if (inventaire_case_pic[7] == 1) {
  coeur[7].visible = true;
}
if (inventaire_case_pic[8] == 1) {
  coeur[8].visible = true;
}
if (inventaire_case_pic[9] == 1) {
  coeur[9].visible = true;
}

if (inventaire_case_pic[1] == 2) {
  capsule_energetique[1].visible = true;
}
if (inventaire_case_pic[2] == 2) {
  capsule_energetique[2].visible = true;
}
if (inventaire_case_pic[3] == 2) {
  capsule_energetique[3].visible = true;
}
if (inventaire_case_pic[4] == 2) {
  capsule_energetique[4].visible = true;
}
if (inventaire_case_pic[5] == 2) {
  capsule_energetique[5].visible = true;
}
if (inventaire_case_pic[6] == 2) {
  capsule_energetique[6].visible = true;
}
if (inventaire_case_pic[7] == 2) {
  capsule_energetique[7].visible = true;
}
if (inventaire_case_pic[8] == 2) {
  capsule_energetique[8].visible = true;
}
if (inventaire_case_pic[9] == 2) {
  capsule_energetique[9].visible = true;
}
}


if (inventaire == 0 || inventaire == 2) {
  if (inventaire_case_pic[1] == 1){
  coeur[1].visible = false;
}
if (inventaire_case_pic[2] == 1) {
  coeur[2].visible = false;
}
if (inventaire_case_pic[3] == 1) {
  coeur[3].visible = false;
}
if (inventaire_case_pic[4] == 1) {
  coeur[4].visible = false;
}
if (inventaire_case_pic[5] == 1) {
  coeur[5].visible = false;
}
if (inventaire_case_pic[6] == 1) {
  coeur[6].visible = false;
}
if (inventaire_case_pic[7] == 1) {
  coeur[7].visible = false;
}
if (inventaire_case_pic[8] == 1) {
  coeur[8].visible = false;
}
if (inventaire_case_pic[9] == 1) {
  coeur[9].visible = false;
}

if (inventaire_case_pic[1] == 2) {
  capsule_energetique[1].visible = false;
}
if (inventaire_case_pic[2] == 2) {
  capsule_energetique[2].visible = false;
}
if (inventaire_case_pic[3] == 2) {
  capsule_energetique[3].visible = false;
}
if (inventaire_case_pic[4] == 2) {
  capsule_energetique[4].visible = false;
}
if (inventaire_case_pic[5] == 2) {
  capsule_energetique[5].visible = false;
}
if (inventaire_case_pic[6] == 2) {
  capsule_energetique[6].visible = false;
}
if (inventaire_case_pic[7] == 2) {
  capsule_energetique[7].visible = false;
}
if (inventaire_case_pic[8] == 2) {
  capsule_energetique[8].visible = false;
}
if (inventaire_case_pic[9] == 2) {
  capsule_energetique[9].visible = false;
}

}

}
}
