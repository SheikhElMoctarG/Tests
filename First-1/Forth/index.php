<?php

for ($i=0; $i <=5; $i++) { 
    for ($k=1; $k <=$i; $k++) { 
        echo " ";
    }
    for ($j=1; $j <=5-$i; $j++) { 
        echo "*";
    }
    echo "\n";
}

?>