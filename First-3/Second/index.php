<?php

 for ($i=1; $i <=6 ; $i++) { 
     for ($j=1; $j <=6-$i ; $j++) { 
         echo " ";
     }
     echo "*";
     for ($j2=1; $j2 <=$i-1; $j2++) { 
         echo " ";
     }
     for ($j3=1; $j3 <=$i/1-2; $j3++) { 
         echo " ";
     }
     if ($i != 1) {
         echo "*";
     }
     echo "\n";
     if ($i == 6) {
         for ($i2=1; $i2 <=$i-1; $i2++) { 
             for ($j1=1; $j1 <=$i2; $j1++) { 
                 echo " ";
             }
             echo "*";
             for ($j2=1; $j2 <=$i-$i2-1; $j2++) { 
                 echo " ";
             }
             for ($j3=1; $j3 <=$i-$i2-2; $j3++) { 
                 echo " ";
             }
             if ($i2 != 5) {
                 echo "*";
             }
             echo "\n";
         }
     }
 }

?>