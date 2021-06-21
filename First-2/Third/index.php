<?php

 $total = 7;
 for ($i=1; $i <=$total; $i++) { 
     for ($k=1; $k <=$i; $k++) { 
         echo " ";
     }
     for ($j=1; $j <=$total-$i; $j++) { 
         echo "*";
         if ($j >=4) {
             for ($e=1; $e <=$j/4; $e++) { 
                 echo "*";
             }
         } else {
             for ($e=1; $e <=$j/2; $e++) { 
                 echo "*";
             }
        }
     }
     echo "\n";
 }

?>