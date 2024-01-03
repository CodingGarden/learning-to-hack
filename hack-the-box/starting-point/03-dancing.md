* Server Message Block
  * Another protocol for transferring files
  * Typically running on windows machines
  * Port 445
  * Misconfiguration
    * anonymous
    * guest
  * smbclient
    * smbclient -L target.ip.address
      * will list available shares
    * dir
      * list files
    * get filename