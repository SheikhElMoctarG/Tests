<?php

  for ($i=0; $i <=5; $i++) { 
      for ($k=1; $k <=5-$i; $k++) { 
          echo " ";
      }
      for ($j=1; $j <=$i; $j++) { 
          echo "*";
      }
      echo "\n";
  }

?>