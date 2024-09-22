<?php
// Set the file path and name for the viewer count storage
$viewerCountFile = 'viewer_count.txt';

// Check if the file exists, if not create it
if (!file_exists($viewerCountFile)) {
    file_put_contents($viewerCountFile, 0);
}

// Get the current viewer count from the file
$viewerCount = (int) file_get_contents($viewerCountFile);

// Increment the viewer count
$viewerCount++;

// Update the viewer count in the file
file_put_contents($viewerCountFile, $viewerCount);

// Output the updated viewer count
echo $viewerCount;
?>
