<?php
    // header(s)
    header("Content-Type: application/json");

    // get url, parse data, and echo back quote
    $id = $_GET["id"];
    $quote = file_get_contents("http://www.seanwrona.com/typeracer/text.php?id=" + $id);
    $output = array();
    echo($quote);
?>