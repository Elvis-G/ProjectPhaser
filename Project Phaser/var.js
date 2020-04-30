////////// VAR PRINCIPALES //////////
var cursors;
var platforms;
var player;
var npc_georges;
var npc_lise;
var game = 0;
var map;


///// Points de vie et batterie /////
var pic_pv
var pv = 3;
var pic_pv;
var battery = 100;
var pic_battery;
var timer_battery;

///// Amélioration + Upgrade joueur /////
var upgrade = 0;
var plastron;
var heart_hide;

var buff_pv = 0;
var buff_degat = 1;

///// degats /////
var degat_player = 1;
var degat_enemy = 1;

///// Inventaire /////
var inventaire = 0;
var pic_inventaire;
var selected;
var pic_selected;
var inventaire_case = [];
var inventaire_case_pic = [];


///// Action, déplacements, inventaire... /////
var spacebar;
var z;
var q;
var s;
var d;
var e;
var i;
var echap;
var enter;

var pose_coffre;
var attack_coffre = 0;


///// Enemy & frame invincible /////
var enemy;
var enemys;
var timer_invincible;
var invincible;

///// boss /////
var en_boss;
var pv_boss = 5;
var pose_boss_coffre;
var boss_invincible;
var timer_boss_invincible;
var attack_coffre_boss = 0;

var deplacement_alea;
var timer_mouvement;


///// dialogues /////
var dialogue_coffre = 0;
var dialogue_visible = 0;
var dialogue_text;
var pic_dialogue_player;
var pic_dialogue_lise;
var pic_dialogue_georges;
var pic_dialogue_enemy;

///// tonneau ; débris ; cactus ; ordinateur ; switch /////
var t1;
var t2;
var d1;
var d2;
var c1;
var c2;
var ordi;
var switchs
var switch1;
var switch2;


///// animations /////
var tonneau_fire;
var tonneau_fire2;
var tumbleweed;
var timer_tumbleSpeed;
var timer_tumbleGenerate;

///// fondu & autres /////
var fondu;
var timer_fondu;
var fondu_coffre = 0;
var night;

///// collectibles /////
var capsule_energetique = [];
var coeur = [];
var loot = 0;
var coffre;
var coffre_x;
var coffre_y;
var collectibles;
var coeur_pic;
var coeur_pic1;
var coeur_pic2;
var coeur_pic3;
var coeur_pic4;
var coeur_pic5;
var coeur_pic6;
var coeur_pic7;
var coeur_pic8;
var coeur_pic9;
var capsule_energetique_pic;
var capsule_energetique_pic2;
var capsule_energetique_pic3;
var capsule_energetique_pic4;
var capsule_energetique_pic5;
var capsule_energetique_pic6;
var capsule_energetique_pic7;
var capsule_energetique_pic8;
var capsule_energetique_pic9;
