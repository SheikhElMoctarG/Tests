<?php

  for ($i=1; $i <=6; $i++) { 
      for ($j=1; $j <=$i; $j++) { 
          echo "*";
      }
      echo "\n";
      if ($i == 6) {
          for ($a=1; $a <=$i; $a++) { 
              for ($o=1; $o <=$i-$a; $o++) { 
                  echo "*";
              }
              echo "\n";
          }
      }
  }

?>