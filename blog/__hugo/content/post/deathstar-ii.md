---
title: "Deathstar II"
date: 2019-12-09T18:01:49+11:00
description: "Upgrading my home-server"
categories: ["Life"]
featuredImage: ""
displayInList: true
breadcrumb: true

stickyInGlobal: false
stickyInCategory: false

showDateInList: true
showDateInPost: true

showCategoriesInList: true
---

The OpenMediaVault NAS VM running on my home server (_a HP ProLiant MicroServer Gen8, codename `deathstar`_) has been slowly counting down the remaining available free space of its 3TB RAID-1 WD Red's.  

With about 10GB free (as of 8/12/2019), it was time for a space upgrade!  

> The two WD Red's were also nearing their life expectancy (supposedly about 3-5 years) as one drive was installed in March 2017, the other installed in September 2014.

# Before We Begin

I don't really do RAID maintenance all that often, so alot of what I did was under guidance of the internet.  
_Because, you can trust everything you read on the internet right!?_

# Segue - PiGone!

One of the VMs running on `deathstar` was [PiHole](https://pi-hole.net/), a software suite built to block ads on a DNS level.  
While I originally had it set up and working well, I found myself constantly turning it off so that CashRewards and other online store purchasing rewards would work correctly.  

At the end of the day I decided to get rid off it, since I was able to just toggle my browser's ad-blocker anyway.

![](piHole.gif)

# Servers off!

With the `deathstar` turned off, the first thing to do was to remove the old drives and install the brackets.

![](20191208_202059.jpg)

![](20191208_234608.jpg)

# Enter, Seagate

I opted for two Seagate IronWolf 8TB NAS hard drives (as they were cheaper than their WD Red counterparts during the time of purchase).

![](20191208_210631.jpg)

Now to install the drives, well just one for now...  
**I only replaced one drive in the RAID** so that I could sync/rebuild the existing data to the new drive.  
When the rebuild is done, I will then be able to replace the other drive and do another rebuild.

| | |
|:--:|:--:|
|![](20191208_212129.jpg)|![](20191208_212244.jpg)|

Don't forget to label your drives too!
![](20191208_215129.jpg)
![](20191208_215235.jpg)

# Segue - Adding a graphics card

I decided to open up the server and give it abit of dust cleaning.  
Since I had opened the case already, I installed a spare graphics card that I had (casually as you would) lying around.

![](20191208_214058.jpg)
![](20191208_214643.jpg)

But wait, I wasn't getting any output from the onboard VGA!?

Time to whip out and daisy chain a DMS59->DVI to a DVI->VGA adapter  
![](20191208_222750.jpg)

There was also a bit of BIOS configuration that you needed to make in order to get the integrated/embedded graphics alongside with the dedicated graphics card.
![](20191208_222332.jpg)

And everything's working okay again!  
![](20191208_215435.jpg)

# Updating the RAID

> 
Now to install the drives, well just one for now...  
**I only replaced one drive in the RAID** so that I could sync/rebuild the existing data to the new drive.  
When the rebuild is done, I will then be able to replace the other drive and do another rebuild.

With one of the NAS drives replaced I could then begin the first rebuild process.  
But wait! There wasn't anything in the RAID Management tab on OpenMediaVault!

SSHing into OMV, I could see that the RAID was not currently running

```
root@files:[~]: cat /proc/mdstat
Personalities : [linear] [multipath] [raid0] [raid1] [raid6] [raid5] [raid4] [raid10]
md0 : inactive sdb[0](S) sdc[2](S)
      10744031024 blocks super 1.2

unused devices: <none>
```

So we simply just had to start up the RAID again

```
root@files:[~]: mdadm --run /dev/md0
mdadm: started array /dev/md0
```

With that, the RAID appeared back in OMV and we could see that it was rebuilding.  

![](Snipaste_2019-12-09_00-03-49.png)
![](Snipaste_2019-12-09_00-04-04.png)

After a couple of hours (6 hours) the new drive was rebuilt, now I was able to remove the last existing drive and replace it with the new 8TB drive.  
It's simply a matter of performing the same steps again!

# Expansion

Finally with both 8TB drives installed, the last thing to do was to expand the RAID and the filesystem.

```
root@files:[~]: mdadm --grow /dev/md0 --size=max
mdadm: component size of /dev/md0 has been set to 7813895512K

root@files:[~]: resize2fs /dev/md0
resize2fs 1.43.4 (31-Jan-2017)
Filesystem at /dev/md0 is mounted on /srv/dev-disk-by-label-hyperdrive; on-line resizing required
old_desc_blocks = 350, new_desc_blocks = 932
```

On the internet, they advised to do two things

1) Clear the bitmap (?)  
`mdadm --grow /dev/md0 --bitmap none`

2) Unmount the RAID before expanding  
`umount /srv/dev-disk-by-label-hyperdrive`

I didn't do either of these, and I assume they would increase the performance and decrease the time it would take.  
But we're still alive.

# Conclusion

Both 8TB drives are now installed, and the 3TB drives can be put to some other use I guess..

![](Snipaste_2019-12-09_17-52-57.png)

We just have to wait for grow to complete, and we'll be on our way!  
![](Snipaste_2019-12-09_17-54-53.png)


