# Bright stars catalog

This catalog of stars with an apparent magnitude lower than 6.5 comes
from Strasbourg university:
<http://cdsarc.u-strasbg.fr/ftp/pub/cats/V/50/>

* `format.txt`: explains how `catalog.txt` and `notes.txt` are formatted.
* `catalog.txt`: here is the lsit of all the stars below 6.5 apparent magnitude.

In the end, for the display, we need four info per star (each one a float32):

* Latitude
* Longitude
* Temperature
* Brightness: a float between 0.02 and 2.0.

Script `parse.mjs` is used to create `stars.dat` binary file with a 4 float32
per star. This file will be used as attributes for the program that will display
the stars.

It must be executed in this folder and will generate `stars.dat` in the parent
folder.
