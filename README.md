# ERC20, BEP20 exchange creation tool

DEX White-label at your own domain. Without coding skills. 2 CLICK INSTALLATION, JUST FORK AND ADD DOMAIN.
Compatible with all EVM networks.

Video: https://www.youtube.com/watch?v=x6LJTJCVWiI

# Price: Start for FREE

Once you start earning from this app, we will charge only 1/5 of your profit (not volume). Alternatively, you can avoid this fee by purchasing the premium version (https://onout.org/dex/) of the tool. Our RevShare model offers several benefits, including the ability to start using the tools for free, only paying for them when they generate profit. This means you can test out the tools without any upfront costs.

# Howto

1. fork this repo
2. go to settings (check the address github/YOURNAME/dex, not https://github.com/appsource/dex/!) and enable Github pages
   ![alt text](howto.png "Title")
3. add your "custom domain" (don't forget to change DNS of your domain. <a href="https://www.youtube.com/watch?v=EX4w9hsduNA" target="_blank">video tutorial</a>)

# Your custom settings

You need to edit values of these customizations are for your own use. Open `index.html` in the root of the main directory and just add this global script somewhere between `<head>` and `</head>`:
> This file is minified. The file is minified, so you can use some service to make it readable. For example: https://webformatter.com/html

```html
<script type="text/javascript">
  window.SO_Definance = {}
  window.SO_Definance.masterAddress = '<EVM address>'
  window.SO_Definance.chainIds = ["56","137","250"]
  window.ONOUT_refport = 'https://refport.onout.org/'
  window.ONOUT_chatidForRefport = 1232131232
</script>
```

- `<EVM address>`: your blockchain address that will be able to access admin settings inside the app
- `["56","137","250"]`: networks you want to be shown.
  List of the available networks: [DEX networks](https://github.com/noxonsu/unifactory/blob/main/src/networks.json).
  To add a private chain please contact https://t.me/onoutsupportbot or email **support@onout.org** ([Read more](https://support.onout.org/hc/1331700057/32/addnewnetwork?category_id=8))

- `ONOUT_refport`: url to send logs about connected address and his referrer (for social referral network activities). Remove this line or comment to disable reports
- `ONOUT_chatidForRefport`: id of your chat where you have added @testonoutbot who will send you reports. Add @getmyid_bot to your group to get the ID.
  ![image](https://user-images.githubusercontent.com/2914674/205314312-a75aa402-c248-49d6-8e35-d9b1453e9bd9.png)

# Update your version

Run github codespace with 16gb RAM then:

```bash
git clone https://github.com/noxonsu/unifactory
cd unifactory
nvm use 16
nvm install
npm i
npm run build_clean
```

Move files from build folder to this repository root folder (don't forget to `rm -rf unifactory`)

```bash
rsync -av --remove-source-files ./build/ ../
cd ..
rm -rf unifactory
```
