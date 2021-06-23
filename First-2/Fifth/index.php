<?php

 for ($i=1; $i <=6; $i++) { 
     for ($j=1; $j <=6-$i; $j++) { 
         echo " ";
     }
     for ($j1=1; $j1 <=$i; $j1++) { 
         echo "*";
     }
     echo "\n";
     if ($i == 6) {
         for ($i2=1; $i2 <=$i; $i2++) { 
             for ($j2=1; $j2 <=$i2; $j2++) { 
                 echo " ";
             }
             for ($j3=1; $j3 <=$i-$i2; $j3++) { 
                 echo "*";
             }
             echo "\n";
         }
     }
 }

?>