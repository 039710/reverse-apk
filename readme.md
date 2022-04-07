https://github.com/039710/reverse-apk.git

## Challenge

- To get flag in the code

## Instruction

- Use apktool to decompile and recompile the afk
- To sign recompiled apk use jarsigner

## To generate keystore

```
  keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

## To sign ur apk

```
  jarsigner -verbose -keystore <path_ks> <path_to_apk> key_alias
```
