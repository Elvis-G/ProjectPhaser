// la charge de la battery
function functionTimer_battery () {
  if (battery >= 1) {
battery -= 1;
}
}

// Tumbleweed "aléatoire"
function functiontumbleSpeed () {
  if (tumbleweed.x < 850) {
    tumbleweed.x +=5
}
}

function functiontumbleGenerate () {
  tumbleweed.x = 50;
  tumbleweed.y = Phaser.Math.Between(100,500);
}

// recupére collectible de la quête
function functionTonneau1 () {
 if (e.isDown) {
   t1.destroy();
   dialogue_coffre +=1;
 }
}

function functionTonneau2 () {
  if (e.isDown) {
    t2.destroy();
    dialogue_coffre +=1;
  }
}

// Buff de dégats (x2) grâce à l'ordinateur
function functionBuff_Force () {
    dialogue_coffre += 2;
    buff_degat = 2;
    ordi.destroy();
}

// permet d'avoir 4 HP
function functionBuff_Vie () {
    buff_pv = 1;
    pv = 4;
    plastron.destroy();
}

function functionHeart () {
  pv += 1;
  heart_hide.destroy();
}


// frame d'invulnerabilité
function functionInvincible () {
  invincible = 0;
}

function functionInvincible_boss () {
  boss_invincible = 0;
}

// enemy hitbox
function functionEnemy_hitbox (player, enemy) {
  enemy.setVelocityX(0);
  enemy.setVelocityY(0);
  if (attack_coffre == 1) {
    coffre_x = enemy.x;
    coffre_y = enemy.y;
    enemy.destroy ();
    coffre = 1;
  } else if (invincible == 0){
    pv -=1;
    invincible = 1;
  }
}

function functionBoss_hitbox () {
  en_boss.setVelocityX(0);
  en_boss.setVelocityY(0);
  if (attack_coffre == 1 & boss_invincible == 0 & attack_coffre_boss == 0) {
    pv_boss -= 1;
    boss_invincible = 1;
    if (pv_boss == 0) {
      en_boss.destroy();
      dialogue_coffre +=2
    }
  } else if (invincible == 0){
    pv -=1;
    invincible = 1;
  }
}

function function_mouvement () {
deplacement_alea = Phaser.Math.Between(0,3);
}

function functionCollect () {
    collectibles.destroy ();
    function_caseInventaire ();z
}


//Si la case contient un coeur ou une capsule énergétique
function function_choixInventaire () {
  inventaire_case[selected];
// si coeur
  if (selected == 1 & inventaire_case[1] == 1) {
    pv +=1;
    inventaire_case[1] = 0;
    inventaire_case_pic[1] = 0;
    coeur[1].visible = false;
  } else if (selected == 1 & inventaire_case[1] == 2) {
      battery +=25;
      inventaire_case[1] = 0;
      inventaire_case_pic[1] = 0;
      capsule_energetique[1].visible = false;
  } else if (selected == 2 & inventaire_case[2] == 1) {
  pv +=1;
  inventaire_case[2] = 0;
  inventaire_case_pic[2] = 0;
  coeur[2].visible = false;
  } else if (selected == 2 & inventaire_case[2] == 2) {
      battery +=25;
      inventaire_case[2] = 0;
      inventaire_case_pic[2] = 0;
      capsule_energetique[2].visible = false;
    } else if (selected == 3 & inventaire_case[3] == 1) {
    pv +=1;
    inventaire_case[3] = 0;
    inventaire_case_pic[3] = 0;
    coeur[3].visible = false;
  } else if (selected == 3 & inventaire_case[3] == 2) {
      battery +=25;
      inventaire_case[3] = 0;
      inventaire_case_pic[3] = 0;
      capsule_energetique[3].visible = false;
    }  else if (selected == 4 & inventaire_case[4] == 1) {
    pv +=1;
    inventaire_case[4] = 0;
    inventaire_case_pic[4] = 0;
    coeur[4].visible = false;
  } else if (selected == 4 & inventaire_case[4] == 2) {
      battery +=25;
      inventaire_case[4] = 0;
      inventaire_case_pic[4] = 0;
      capsule_energetique[4].visible = false;
    } else if (selected == 5 & inventaire_case[5] == 1) {
    pv +=1;
    inventaire_case[5] = 0;
    inventaire_case_pic[5] = 0;
    coeur[5].visible = false;
  } else if (selected == 5 & inventaire_case[5] == 2) {
      battery +=25;
      inventaire_case[5] = 0;
      inventaire_case_pic[5] = 0;
      capsule_energetique[5].visible = false;
    } else if (selected == 6 & inventaire_case[6] == 1) {
    pv +=1;
    inventaire_case[6] = 0;
    inventaire_case_pic[6] = 0;
    coeur[6].visible = false;
  } else if (selected == 6 & inventaire_case[6] == 2) {
      battery +=25;
      inventaire_case[6] = 0;
      inventaire_case_pic[6] = 0;
      capsule_energetique[6].visible = false;
    } else if (selected == 7 & inventaire_case[7] == 1) {
    pv +=1;
    inventaire_case[7] = 0;
    inventaire_case_pic[7] = 0;
    coeur[7].visible = false;
  } else if (selected == 7 & inventaire_case[7] == 2) {
      battery +=25;
      inventaire_case[7] = 0;
      inventaire_case_pic[7] = 0;
      capsule_energetique[7].visible = false;
    } else if (selected == 8 & inventaire_case[8] == 1) {
    pv +=1;
    inventaire_case[8] = 0;
    inventaire_case_pic[8] = 0;
    coeur[8].visible = false;
  } else if (selected == 8 & inventaire_case[8] == 2) {
      battery +=25;
      inventaire_case[8] = 0;
      inventaire_case_pic[8] = 0;
      capsule_energetique[8].visible = false;
    } else if (selected == 9 & inventaire_case[9] == 1) {
    pv +=1;
    inventaire_case[9] = 0;
    inventaire_case_pic[9] = 0;
    coeur[9].visible = false;
  } else if (selected == 9 & inventaire_case[9] == 2) {
      battery +=25;
      inventaire_case[9] = 0;
      inventaire_case_pic[9] = 0;
      capsule_energetique[9].visible = false;
    }

}

function function_caseInventaire () {
  if (inventaire_case[1] == 0) {
    inventaire_case_pic[1] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[1] == 1) {
      coeur[1] = coeur_pic;
      if (inventaire == 1) {
      coeur[1].visible = true;
      }
      inventaire_case[1] = loot;
      loot = 0;
    } else if (inventaire_case_pic[1] == 2){
      capsule_energetique[1] = capsule_energetique_pic;
      if (inventaire == 1) {
      capsule_energetique[1].visible = true;
      }
      inventaire_case[1] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[2] == 0) {
    inventaire_case_pic[2] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[2] == 1) {
      coeur[2] = coeur_pic2;
      if (inventaire == 1) {
      coeur[2].visible = true;
      }
      coeur[2].x +=65;
      inventaire_case[2] = loot;
      loot = 0;
    } else if (inventaire_case_pic[2] == 2){
      capsule_energetique[2] = capsule_energetique_pic2;
      if (inventaire == 1) {
      capsule_energetique[2].visible = true;
      }
      capsule_energetique[2].x += 65;
      inventaire_case[2] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[3] == 0) {
    inventaire_case_pic[3] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[3] == 1) {
      coeur[3] = coeur_pic3;
      if (inventaire == 1) {
      coeur[3].visible = true;
      }
      coeur[3].x +=130;
      inventaire_case[3] = loot;
      loot = 0;
    } else if (inventaire_case_pic[3] == 2){
      capsule_energetique[3] = capsule_energetique_pic3;
      if (inventaire == 1) {
      capsule_energetique[3].visible = true;
      }
      capsule_energetique[3].x += 130;
      inventaire_case[3] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[4] == 0) {
    inventaire_case_pic[4] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[4] == 1) {
      coeur[4] = coeur_pic4;
      if (inventaire == 1) {
      coeur[4].visible = true;
      }
      coeur[4].y+=65;
      inventaire_case[4] = loot;
      loot = 0;
    } else if (inventaire_case_pic[4] == 2){
      capsule_energetique[4] = capsule_energetique_pic4;
      if (inventaire == 1) {
      capsule_energetique[4].visible = true;
      }
      capsule_energetique[4].y+=65;
      inventaire_case[4] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[5] == 0) {
    inventaire_case_pic[5] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[5] == 1) {
      coeur[5] = coeur_pic5;
      if (inventaire == 1) {
      coeur[5].visible = true;
      }
      coeur[5].y+=65;
      coeur[5].x+=65;
      inventaire_case[5] = loot;
      loot = 0;
    } else if (inventaire_case_pic[5] == 2){
      capsule_energetique[5] = capsule_energetique_pic5;
      if (inventaire == 1) {
      capsule_energetique[5].visible = true;
      }
      capsule_energetique[5].y+=65;
      capsule_energetique[5].x+=65;
      inventaire_case[5] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[6] == 0) {
    inventaire_case_pic[6] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[6] == 1) {
      coeur[6] = coeur_pic6;
      if (inventaire == 1) {
      coeur[6].visible = true;
      }
      coeur[6].y+=65;
      coeur[6].x+=130;
      inventaire_case[6] = loot;
      loot = 0;
    } else if (inventaire_case_pic[6] == 2){
      capsule_energetique[6] = capsule_energetique_pic6;
      if (inventaire == 1) {
      capsule_energetique[6].visible = true;
      }
      capsule_energetique[6].y+=65;
      capsule_energetique[6].x+=130;
      inventaire_case[6] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[7] == 0) {
    inventaire_case_pic[7] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[7] == 1) {
      coeur[7] = coeur_pic7;
      if (inventaire == 1) {
      coeur[7].visible = true;
      }
      coeur[7].y+=130;
      inventaire_case[7] = loot;
      loot = 0;
    } else if (inventaire_case_pic[7] == 2){
      capsule_energetique[7] = capsule_energetique_pic7;
      if (inventaire == 1) {
      capsule_energetique[7].visible = true;
      }
      capsule_energetique[7].y+=130;
      inventaire_case[7] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[8] == 0) {
    inventaire_case_pic[8] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[8] == 1) {
      coeur[8] = coeur_pic8;
      if (inventaire == 1) {
      coeur[8].visible = true;
      }
      coeur[8].y+=130;
      coeur[8].x+=65;
      inventaire_case[8] = loot;
      loot = 0;
    } else if (inventaire_case_pic[8] == 2){
      capsule_energetique[8] = capsule_energetique_pic8;
      if (inventaire == 1) {
      capsule_energetique[8].visible = true;
      }
      capsule_energetique[8].y+=130;
      capsule_energetique[8].x+=65;
      inventaire_case[8] = loot;
      loot = 0;
    }
  }

  else if (inventaire_case[9] == 0) {
    inventaire_case_pic[9] = loot; // 1 = coeur & 2 = capsule
    if (inventaire_case_pic[9] == 1) {
      coeur[9] = coeur_pic9;
      if (inventaire == 1) {
      coeur[9].visible = true;
      }
      coeur[9].y+=130;
      coeur[9].x+=130;
      inventaire_case[9] = loot;
      loot = 0;
    } else if (inventaire_case_pic[9] == 2){
      capsule_energetique[9] = capsule_energetique_pic9;
      if (inventaire == 1) {
      capsule_energetique[9].visible = true;
      }
      capsule_energetique[9].y+=130;
      capsule_energetique[9].x+=130;
      inventaire_case[9] = loot;
      loot = 0;
    }
  }
}


// Changement de scène
function functionSwitch_Scene3 () {
    this.scene.start("3_scene");
    dialogue_coffre = 54;
}

function functionSwitch_Scene2 () {
    this.scene.start("2_scene");
    dialogue_coffre = 54;
}

//Le fondu + construction tableau.
function functionFondu () {
    if (fondu_coffre < 1){
      fondu_coffre += 1;
      fondu.destroy();
      inventaire_case[1] = 0;
      inventaire_case[2] = 0;
      inventaire_case[3] = 0;
      inventaire_case[4] = 0;
      inventaire_case[5] = 0;
      inventaire_case[6] = 0;
      inventaire_case[7] = 0;
      inventaire_case[8] = 0;
      inventaire_case[9] = 0;
    }
}
