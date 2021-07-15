<?php

 for ($i=1; $i <=10; $i++) { 
     if ($i == 1) {
         echo "*";
         for ($j=1; $j <=9; $j++) { 
             echo " *";
         }
         echo "\n";
     } else if($i != 10){
         echo "*";
         for ($j=1; $j <=8; $j++) { 
             echo "  ";
         }
         echo " *\n";
     } else if($i ==10){
         echo "*";
         for ($j=1; $j <=9; $j++) { 
             echo " *";
         }
         echo "\n";
     }
 }

?>