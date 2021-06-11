import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native'
import {TextInput,ScrollView} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Ionicons'
import Couches from '../common/Couches'
import New from '../common/New'
import Best from '../common/Best'
import axios from 'axios'

export default class Home extends React.Component {
    state={
        data:[
            {
                "data": [
                    {
                        "discription": "Hada Labo Advanced Nourish Trial Pack",
                        "image": "https://static-01.daraz.com.np/p/eaa100aa361ecaa076bf3de7d977c559.jpg",
                        "price": "Rs. 450"
                    },
                    {
                        "discription": "Mamaearth Bye Bye Blemishes Face Cream, For Pigmentation & Blemish Removal, With Mulberry Extract & Vitamin C - 30Ml",
                        "image": "https://static-01.daraz.com.np/p/76132530e0962ccdc92e9dbd1a7a8b4d.jpg",
                        "price": "Rs. 720"
                    },
                    {
                        "discription": "Hada Labo Advanced Nourish Lotion For Oily Skin - 100 Ml",
                        "image": "https://static-01.daraz.com.np/p/11cff0d172866543038706f855457e02.jpg",
                        "price": "Rs. 730"
                    },
                    {
                        "discription": "Mamaearth Oil-Free Face Moisturizer For Acne-Prone Skin, 80Ml",
                        "image": "https://static-01.daraz.com.np/p/4091e5b8ecd840b9d59111f70a9f5189.jpg",
                        "price": "Rs. 480"
                    },
                    {
                        "discription": "mamaearth Aloe Vera Gel with Pure Aloe Vera & Vitamin E for Skin and Hair - 300ml",
                        "image": "https://static-01.daraz.com.np/p/76bb288a2bc7665dc6c151671f18607e.jpg",
                        "price": "Rs. 640"
                    },
                    {
                        "discription": "Plum Green Tea Mattifying Moisturizer-50ml",
                        "image": "https://static-01.daraz.com.np/p/ed436784e6ac7832eb0b3c6407a27549.jpg",
                        "price": "Rs. 869"
                    },
                    {
                        "discription": "Hada Labo Perfect White Trial Pack",
                        "image": "https://static-01.daraz.com.np/p/412c6a691be81d54022cbd9ad94e79db.jpg",
                        "price": "Rs. 590"
                    },
                    {
                        "discription": "Acnemoist Moisturising Cream For For Oily & Acne Prone Skin 60Gm",
                        "image": "https://static-01.daraz.com.np/p/dab6dfac807ff526454d8d0355162e8f.jpg",
                        "price": "Rs. 520"
                    },
                    {
                        "discription": "Hada Labo Advanced Nourish Lotion For Normal Skin- 100 Ml",
                        "image": "https://static-01.daraz.com.np/p/aee9be7e2e638939bb492e2c9e7cef5a.jpg",
                        "price": "Rs. 730"
                    },
                    {
                        "discription": "Hada Labo Advanced Nourish Cream - 50 Gm",
                        "image": "https://static-01.daraz.com.np/p/f007cc22d7ce7fe5e811d89d40b53ca4.jpg",
                        "price": "Rs. 1,100"
                    },
                    {
                        "discription": "Neutriderm Vitamin E Moisturising Lotion, All Skin Type, Australian Product, 125Ml",
                        "image": "https://static-01.daraz.com.np/p/da5a554b8980398eeba65747fd1c6b5e.jpg",
                        "price": "Rs. 1,200"
                    },
                    {
                        "discription": "mamaearth CoCo Body Lotion With Coffee and Cocoa for Intense Moisturization - 400ml",
                        "image": "https://static-01.daraz.com.np/p/782b7e8939a5193d4db1c24f89387ca9.jpg",
                        "price": "Rs. 640"
                    },
                    {
                        "discription": "Acnes Scar Care - 12 Gm",
                        "image": "https://static-01.daraz.com.np/p/0beb6d9db68eb6e63ced79c4aa6dff28.jpg",
                        "price": "Rs. 510"
                    },
                    {
                        "discription": "Hada Labo Pro Anti-Aging Cream - 50 Gm",
                        "image": "https://static-01.daraz.com.np/p/bc690bcada8b38820e727fed6e1e3a12.jpg",
                        "price": "Rs. 1,500"
                    },
                    {
                        "discription": "Dm Glow Cream, For Melasma, Black Spot, Skin Whitening And Anti Aging, 15G",
                        "image": "https://static-01.daraz.com.np/p/cfac70ab40f30bf60cd685fc8cd7e080.jpg",
                        "price": "Rs. 400"
                    },
                    {
                        "discription": "Hada Labo Perfect White Lotion - 100 Ml",
                        "image": "https://static-01.daraz.com.np/p/fdf73b0d390b0213c783b0ab42d2fb08.jpg",
                        "price": "Rs. 1,100"
                    },
                    {
                        "discription": "Earth Rhythm Phyto Fuse Multi Vitamin Face Moisturiser (Niacinamide + Retinol + Vitamin E) - 50 gm",
                        "image": "https://static-01.daraz.com.np/p/5d39657a529435b2230cfff8c323f854.png",
                        "price": "Rs. 1,260"
                    },
                    {
                        "discription": "Kleida Skin Lightening Moisturizer, For All Skin Types, 100G",
                        "image": "https://static-01.daraz.com.np/p/8e44a26c362c76d3ba05d3b0d5f19d62.jpg",
                        "price": "Rs. 1,195"
                    },
                    {
                        "discription": "Sara Foods Aloe Vera Gel - 200gm",
                        "image": "https://static-01.daraz.com.np/p/94b88990eed682a74262614d42e116c4.jpg",
                        "price": "Rs. 550"
                    },
                    {
                        "discription": "Scar Z -  12 gm",
                        "image": "https://static-01.daraz.com.np/p/a85730ed969b250f11a5b0cd9775881f.jpg",
                        "price": "Rs. 660"
                    },
                    {
                        "discription": "Earth Rhythm Phyto Ceramide Deep Face Moisturiser for Normal to Dry Skin - 50 gm",
                        "image": "https://static-01.daraz.com.np/p/4f44ea0cf756110d202dd2e80addd6a1.png",
                        "price": "Rs. 1,450"
                    },
                    {
                        "discription": "Nature's Tattva Organic Shea Butter (Raw & Unprocessed) - 100 gm",
                        "image": "https://static-01.daraz.com.np/p/7778ef329f9d8ed20770ed48391678dc.png",
                        "price": "Rs. 750"
                    },
                    {
                        "discription": "Hada Labo Pro Anti-Aging Lotion - 100 Ml",
                        "image": "https://static-01.daraz.com.np/p/91f0a5c751037bb180bc7aafb5664e24.jpg",
                        "price": "Rs. 1,200"
                    },
                    {
                        "discription": "Plum Green Tea Clear Spot-Light Gel 15ml",
                        "image": "https://static-01.daraz.com.np/p/a7803b6e9dc2566c68cac5d6267fa477.jpg",
                        "price": "Rs. 879"
                    },
                    {
                        "discription": "OXY Whitening Cream Spf-27 - 70 Gm",
                        "image": "https://static-01.daraz.com.np/p/40c7a324de11493c9c59cc6bbec34831.jpg",
                        "price": "Rs. 575"
                    },
                    {
                        "discription": "Nature's Tattva Organic Shea Butter (Raw & Unprocessed) - 500 gm",
                        "image": "https://static-01.daraz.com.np/p/4d759e0aaf1318da2786df1fdd5e253f.png",
                        "price": "Rs. 2,470"
                    },
                    {
                        "discription": "Plum E-luminence Deep Moisturizing Creme",
                        "image": "https://static-01.daraz.com.np/p/e534404ce7a73cd8ef9a7d225d957eb0.jpg",
                        "price": "Rs. 1,069"
                    },
                    {
                        "discription": "Hada Labo Perfect White Milk - 90 Gm",
                        "image": "https://static-01.daraz.com.np/p/50bc5ec5fc53b81cde61fe0174201e4b.jpg",
                        "price": "Rs. 1,100"
                    },
                    {
                        "discription": "mamaearth Rose Body Lotion with Rose Water and Milk For Deep Hydration - 400ml",
                        "image": "https://static-01.daraz.com.np/p/8aef0d2f01698cb02afffb84ae1835c4.jpg",
                        "price": "Rs. 640"
                    },
                    {
                        "discription": "NIVEA Soft, Light Moisturising Cream, 200ml",
                        "image": "https://static-01.daraz.com.np/p/2592415bb3507b4ea4ede2839540ad8b.png",
                        "price": "Rs. 400"
                    },
                    {
                        "discription": "Nivea Natural Fairness Face & Body Cream - 200Ml",
                        "image": "https://static-01.daraz.com.np/p/62bb996ae8437c98b6bd527e72d79f0e.png",
                        "price": "Rs. 400"
                    },
                    {
                        "discription": "Glysolid  250ml",
                        "image": "https://static-01.daraz.com.np/p/85d8c602fca890372aefe103eca27054.jpg",
                        "price": "Rs. 345"
                    },
                    {
                        "discription": "Cetaphil Moisturizing Cream, Face & Body, All Skin Types, International Brand Mfg In India, 80G",
                        "image": "https://static-01.daraz.com.np/p/df33ffdb1beff39639ff21b1dcc80dd7.jpg",
                        "price": "Rs. 680"
                    },
                    {
                        "discription": "NIVEA Soft, Light Moisturising Cream, 100ml",
                        "image": "https://static-01.daraz.com.np/p/74c3a21794921486e999c11ec484a76c.png",
                        "price": "Rs. 275"
                    },
                    {
                        "discription": "Nature's Tattva Cocoa Butter (Raw, Unprocessed & Unrefined) - 100 gm",
                        "image": "https://static-01.daraz.com.np/p/44b02c7b60bc3fc0bb548b17bf26f342.png",
                        "price": "Rs. 950"
                    },
                    {
                        "discription": "Strallium, Stretch Mark Cream",
                        "image": "https://static-01.daraz.com.np/p/31566d8c769c92760edcd1db94db78cd.jpg",
                        "price": "Rs. 560"
                    },
                    {
                        "discription": "mamaearth Ubtan Body Lotion with Turmeric & Kokum Butter for Glowing Skin – 400 ml",
                        "image": "https://static-01.daraz.com.np/p/d85db7daf18f797a76b0365c336ef7eb.jpg",
                        "price": "Rs. 640"
                    },
                    {
                        "discription": "Nature's Tattva Anti Pigmentation Papaya Gel for Glowing Skin - 150 gm",
                        "image": "https://static-01.daraz.com.np/p/49a4356b05be2739bc5c73d5fe252f39.png",
                        "price": "Rs. 650"
                    },
                    {
                        "discription": "MEDERMA Cream Skin Care For Scars, 20G",
                        "image": "https://static-01.daraz.com.np/p/cb91de1c47b17d8e3aae928d2b664550.jpg",
                        "price": "Rs. 1,320"
                    },
                    {
                        "discription": "NIVEA Crème, All Season Multi-Purpose Cream, 150ml",
                        "image": "https://static-01.daraz.com.np/p/00e2640f462f38294baefc439569e017.png",
                        "price": "Rs. 300"
                    }
                ],
                "name": "daraz"
            },
            {
                "data": [
                    {
                        "discription": "Dove Intensive Nourishing Care Cream - 150Ml",
                        "image": "https://cdn.sastodeal.com/catalog/product/1/_/1_73_2.jpg",
                        "price": " Rs 299 "
                    },
                    {
                        "discription": "Meidan Cream Cracker 430G",
                        "image": "https://cdn.sastodeal.com/catalog/product/15983/2.936/56.jpg",
                        "price": " Rs 260 "
                    },
                    {
                        "discription": "Dove Beauty Cream Bar 100gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/3491/Dove3/7a.jpg",
                        "price": " Rs 99 "
                    },
                    {
                        "discription": "Thai Cucumber Moisturising Cream 100Ml",
                        "image": "https://cdn.sastodeal.com/catalog/product/t/h/thai_cucumber_moisturising_cream_100ml.jpg",
                        "price": " Rs 950 "
                    },
                    {
                        "discription": "Tiffany Crunch N Cream Orange Cream Waffers 76Gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15996/17.375/30.jpg",
                        "price": " Rs 95 "
                    },
                    {
                        "discription": "Nestle Cream 160Gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15932/ATI-NEPAL-040/1.jpg",
                        "price": " Rs 270 "
                    },
                    {
                        "discription": "Cream Crackers Special 280G",
                        "image": "https://cdn.sastodeal.com/catalog/product/15983/2.690/3.jpg",
                        "price": " Rs 270 "
                    },
                    {
                        "discription": "Tiffani Cream Toffee 650Gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15996/17.49/23.jpg",
                        "price": " Rs 460 "
                    },
                    {
                        "discription": "Arla Whipping Cream 1 Ltr",
                        "image": "https://cdn.sastodeal.com/catalog/product/15908/BB-C0268/C0268.jpg",
                        "price": " Rs 990 "
                    },
                    {
                        "discription": "Bhanbhori Corn Sweet Cream 425gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15908/BB-C0064/BB-C0064.jpg",
                        "price": " Rs 127 "
                    },
                    {
                        "discription": "AcMIST Moisturizing Cream Gel (50g)",
                        "image": "https://cdn.sastodeal.com/catalog/product/a/c/ac1.jpg",
                        "price": " Rs 640 "
                    },
                    {
                        "discription": "Bhanbhori Coconut Cream- 400 ml",
                        "image": "https://cdn.sastodeal.com/catalog/product/15908/BB-C0189/BB-C0189.jpg",
                        "price": " Rs 196 "
                    },
                    {
                        "discription": "Arla Cheese Cream Natural 1.8 Kg",
                        "image": "https://cdn.sastodeal.com/catalog/product/15908/BB-C0101/C0101.jpg",
                        "price": " Rs 4,275 "
                    },
                    {
                        "discription": "Shoon Fatta Cream Crackers Special 360Gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15996/11.217/18.jpg",
                        "price": " Rs 265 "
                    },
                    {
                        "discription": "Colgate Strong Teeth 46gm (Dental Cream)",
                        "image": "https://cdn.sastodeal.com/catalog/product/15967/50.35/strong.jpg",
                        "price": " Rs 25 "
                    },
                    {
                        "discription": "McVitie's Dark Cookie Cream 50 Gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15798/11.812/mv5.jpg",
                        "price": " Rs 20 "
                    },
                    {
                        "discription": "McVitie's Dark Cookie Cream Biscuits 120 Gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15798/11.811/mv1.jpg",
                        "price": " Rs 60 "
                    },
                    {
                        "discription": "Shoon Fat Cream Cracker (14 Individual Packs) 280GM",
                        "image": "https://cdn.sastodeal.com/catalog/product/15660/SD-GURJBIS-026/pic26.jpg",
                        "price": " Rs 248 "
                    },
                    {
                        "discription": "Pokybar With Choco Coconut Flavour Cream, 25 Gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15955/TRIYOGSTORE-PRTM-CAGLA-5/6.jpg",
                        "price": " Rs 34 "
                    },
                    {
                        "discription": "Pigeon Nipple Care Cream-50G",
                        "image": "https://cdn.sastodeal.com/catalog/product/3987/PIGE-NIPPCRE/PIGE-NIPPCRE.jpg",
                        "price": " Rs 1,230 "
                    },
                    {
                        "discription": "Arla Cream Cheese Natural 150gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15908/BB-C0385/C0385.jpg",
                        "price": " Rs 695 "
                    },
                    {
                        "discription": "Munchys Vanilla Cream Wafer 130G",
                        "image": "https://cdn.sastodeal.com/catalog/product/15983/2.133/46.jpg",
                        "price": " Rs 115 "
                    },
                    {
                        "discription": "Cornitos Nacho Crisps Cheesy Sour Cream & Onion 60 gm",
                        "image": "https://cdn.sastodeal.com/catalog/product/15947/TRIYOGSTORE-PRTAM-45/46.jpg",
                        "price": " Rs 105 "
                    },
                    {
                        "discription": "Cornitos Nacho Crisps Cheesy Sour Cream & Onion 140 g",
                        "image": "https://cdn.sastodeal.com/catalog/product/15947/TRIYOGSTORE-PRTAM-44/45.jpg",
                        "price": " Rs 210 "
                    }
                ],
                "name": "sastodeal"
            },
            {
                "data": [
                    {
                        "discription": "4K Plus Whitening Night Cream (Thai Cosmetics)",
                        "image": "https://www.gyapu.com/public/files/31D626DC2F72BF3-1.jpg",
                        "price": "Rs 1900"
                    },
                    {
                        "discription": "Earth Rhythm Sweet Pea Butter Cream Soap",
                        "image": "https://www.gyapu.com/public/files/0ABCEDED97A100F-42.png",
                        "price": "Rs 1100"
                    },
                    {
                        "discription": "Himalaya Gentle Exfoliating Walnut Scrub 100Gm",
                        "image": "https://www.gyapu.com/public/files/09BB84C6CEDB32D-51tQLIAPNeL._SL1000_.jpg",
                        "price": "Rs 216"
                    },
                    {
                        "discription": "Mistine Snail Expert Anti-Aging Cream",
                        "image": "https://www.gyapu.com/public/files/510D1B51EF6FFAB-unnamed.jpg",
                        "price": "Rs 1500"
                    },
                    {
                        "discription": "Mistine Gold-Proactive Anti-Wrinkle Night Cream",
                        "image": "https://www.gyapu.com/public/files/863B80324B45505-41j5rPl8DkL.jpg",
                        "price": "Rs 1200"
                    },
                    {
                        "discription": "Flower Me Armpit White Cream (Thai Cosmetics)",
                        "image": "https://www.gyapu.com/public/files/F371B670B140521-139.jpg",
                        "price": "Rs 650"
                    },
                    {
                        "discription": "OJ Snail B.B Cream (Sparkle)",
                        "image": "https://www.gyapu.com/public/files/F3007EF659AF3E4-IMG_4868.jpg",
                        "price": "Rs 1700"
                    },
                    {
                        "discription": "Clever Cat BB Cream BB++",
                        "image": "https://www.gyapu.com/public/files/07CEA57A8814303-IMG_7961.jpg",
                        "price": "Rs 330"
                    },
                    {
                        "discription": "Mistine Baby BB Cream",
                        "image": "https://www.gyapu.com/public/files/08109B72112F9CD-download (1).jfif",
                        "price": "Rs 900"
                    },
                    {
                        "discription": "MINGHAN-Cushion BB Cream (buy 1 get 1 free) (MaskQueen Nepal)",
                        "image": "https://www.gyapu.com/public/files/2EAAE0F20DF9790-名韩BB气垫6.jpg",
                        "price": "Rs 1280"
                    },
                    {
                        "discription": "Blue Cow Creamer 390 GM",
                        "image": "https://www.gyapu.com/public/files/E0A1FD975A357DE-4.jpg",
                        "price": "Rs 150"
                    },
                    {
                        "discription": "Mistine Easy Out Hair-Removal Cream",
                        "image": "https://www.gyapu.com/public/files/162F11E13989987-e0a2ae6008e267daf9b63d4ee305f630.jpg",
                        "price": "Rs 900"
                    },
                    {
                        "discription": "L'Oreal Paris Collagen Re-plumper Night Cream (Sparkle)",
                        "image": "https://www.gyapu.com/public/files/A4A08E829575FF9-686dff11ee07f778a192e092114f01078f30a4ef.jpg",
                        "price": "Rs 1250"
                    },
                    {
                        "discription": "SKINRx LAB MadeCera Re-turn Cream 50ml (Thai Cosmetics)",
                        "image": "https://www.gyapu.com/public/files/C6B26B606546D1E-1.jpg",
                        "price": "Rs 1500"
                    },
                    {
                        "discription": "EXPLOR MEN'S CREAM FORWARD WHITE NERGY CREAM SPF20 PA++ (20g)",
                        "image": "https://www.gyapu.com/public/files/40B1D4EE268F681-EXFWN5D.png",
                        "price": "Rs 350"
                    },
                    {
                        "discription": "Cream Wallpaper",
                        "image": "https://www.gyapu.com/public/files/18F32A8FD5276D6-TTTUIO.jpeg",
                        "price": "Rs 2090"
                    },
                    {
                        "discription": "Fabindia Hand Cream",
                        "image": "https://www.gyapu.com/public/files/AF1F8315C8E0CC4-handcream.PNG",
                        "price": "Rs 641"
                    },
                    {
                        "discription": "Himalaya Baby Cream",
                        "image": "https://www.gyapu.com/public/files/4303A6725033852-baby cream.jpg",
                        "price": "Rs 400"
                    },
                    {
                        "discription": "CREAM PANDA Cake",
                        "image": "https://www.gyapu.com/public/files/61BF2FA48BEA45D-56.jpg",
                        "price": "Rs 1200"
                    },
                    {
                        "discription": "Cream Printed Wallpaper",
                        "image": "https://www.gyapu.com/public/files/33AA0DD12AF1AD7-108004527_3394400510581072_1042570736159269094_n.jpg",
                        "price": "Rs 2090"
                    },
                    {
                        "discription": "Purple & Cream Wallpaper",
                        "image": "https://www.gyapu.com/public/files/EBFACB6D7DA7A54-tt.jpg",
                        "price": "Rs 2090"
                    },
                    {
                        "discription": "BB Cool Cream",
                        "image": "https://www.gyapu.com/public/files/0116138A1EC15DA-IMG_8064.jpg",
                        "price": "Rs 300"
                    },
                    {
                        "discription": "Nars BB Cream",
                        "image": "https://www.gyapu.com/public/files/744729EF90FCD21-IMG_8071.jpg",
                        "price": "Rs 340"
                    },
                    {
                        "discription": "Melaklear Scar Cream",
                        "image": "https://www.gyapu.com/public/files/06777293E8EDC4D-scar (2).jpg",
                        "price": "Rs 1000"
                    },
                    {
                        "discription": "Nivea Whitening Cream",
                        "image": "https://www.gyapu.com/public/files/5C02CBC0AD6842F-41zyExsHDjL.jpg",
                        "price": "Rs 400"
                    },
                    {
                        "discription": "Nivea Soft Cream",
                        "image": "https://www.gyapu.com/public/files/047D84FEB801C15-0019751_nivea-soft-cream-100-ml-ktm.jpeg",
                        "price": "Rs 275"
                    },
                    {
                        "discription": "Dove Beauty Cream",
                        "image": "https://www.gyapu.com/public/files/28803980CA618B8-beauty.jpg",
                        "price": "Rs 450"
                    },
                    {
                        "discription": "Cream Handbag (Milano)",
                        "image": "https://www.gyapu.com/public/files/20FDA3E3854C863-IMG_9831.jpg",
                        "price": "Rs 1500"
                    },
                    {
                        "discription": "Himalaya Under Eye Cream",
                        "image": "https://www.gyapu.com/public/files/6449C05B43E699B-mnmnmnnmmn.jpg",
                        "price": "Rs 320"
                    },
                    {
                        "discription": "Flexi Cream 1ltr",
                        "image": "https://www.gyapu.com/public/files/CB0ABB3CAB7523F-flexi_cream.jpg",
                        "price": "Rs 315"
                    },
                    {
                        "discription": "Fabindia De-Pigmentation Cream",
                        "image": "https://www.gyapu.com/public/files/3833CD3502818B0-de -pigmentation.PNG",
                        "price": "Rs 831"
                    },
                    {
                        "discription": "Fabindia Daily Moisturing Cream",
                        "image": "https://www.gyapu.com/public/files/4B918676335FE85-IMG_3847.jpg",
                        "price": "Rs 475"
                    },
                    {
                        "discription": "Baileys Original Irish Cream",
                        "image": "https://www.gyapu.com/public/files/99DEE34DC3D1A3A-493742816058132777764669130877662873210240459.png",
                        "price": "Rs 6245"
                    },
                    {
                        "discription": "Comfortable Cream Printed Trousers",
                        "image": "https://www.gyapu.com/public/files/CC173DAF683A44C-7G0A9100 copy.jpg",
                        "price": "Rs 1200"
                    },
                    {
                        "discription": "Cream Printed Butterfly kimono",
                        "image": "https://www.gyapu.com/public/files/E525066D8BBA347-7G0A9046 copy.jpg",
                        "price": "Rs 1600"
                    },
                    {
                        "discription": "Black & Cream Stick Umbrella",
                        "image": "https://www.gyapu.com/public/files/C694595126714D0-WhatsApp Image 2020-07-23 at 4.07.34 PM.jpeg",
                        "price": "Rs 400"
                    },
                    {
                        "discription": "Light Purple & Cream Wallpaper",
                        "image": "https://www.gyapu.com/public/files/255DB1C487D00D4-ttuioe.jpg",
                        "price": "Rs 2090"
                    },
                    {
                        "discription": "Simply Beauty BB Cream",
                        "image": "https://www.gyapu.com/public/files/06C1A49290749ED-IMG_8070.jpg",
                        "price": "Rs 340"
                    },
                    {
                        "discription": "Huxia Beauty Foundation Cream",
                        "image": "https://www.gyapu.com/public/files/AB6E70CC0CD2658-IMG_8073.jpg",
                        "price": "Rs 140"
                    }
                ],
                "name": "gyapu"
            },
            {
                "data": [
                    {
                        "discription": "Cream Cracker Special Biscuit 20gm X 14pkt",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/133/Untitled-1_ee7r-9o.gif",
                        "price": "Rs 270"
                    },
                    {
                        "discription": "Ben Nevis 100 ml Cookies and Cream Ice Cream - Vanilla Ice Cream With Cookies",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/BEN-012--22.jpg",
                        "price": "Rs 100"
                    },
                    {
                        "discription": "Ben Nevis 100 ml Vanilla Caramel Brownie Ice Cream",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/BEN-008_--28.jpg",
                        "price": "Rs 120"
                    },
                    {
                        "discription": "Ben Nevis 100 ml Coffee Almond Fudge Chocolate Ice Cream",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/BEN-011--23.jpg",
                        "price": "Rs 100"
                    },
                    {
                        "discription": "Ben Nevis 100 ml Peanut Butter Ice Cream With Chocolate Chip & Cake",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/BEN-010--29.jpg",
                        "price": "Rs 120"
                    },
                    {
                        "discription": "Ben Nevis 100 ml Midnight Cookies Ice Cream - Chocolate Ice Cream With Cookies and Nuts",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/BEN-013--21.jpg",
                        "price": "Rs 100"
                    },
                    {
                        "discription": "Ben Nevis 100 ml Cotton Candy Ice Cream",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/20_jpe2-kl.jpg",
                        "price": "Rs 100"
                    },
                    {
                        "discription": "Ben Nevis 100 ml Strawberry Cheesecake Ice Cream",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/BEN-007_--24.jpg",
                        "price": "Rs 100"
                    },
                    {
                        "discription": "Ben Nevis Vanilla Caramel Brownie Ice Cream Cup - 500ml",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/170/vanilla.jpg",
                        "price": "Rs 425"
                    },
                    {
                        "discription": "Pringles Sour Cream & Onion Super Stack 110g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/100/pringles_sour_cream_and_onion.jpg",
                        "price": "Rs 210"
                    },
                    {
                        "discription": "Amul Fresh Cream, 1 Litre",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/153/76b.jpg",
                        "price": "Rs 560"
                    },
                    {
                        "discription": "Himalaya Rich Cocoa Butter Body Cream - 200ml",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/118/cocoa.jpg",
                        "price": "Rs 414"
                    },
                    {
                        "discription": "Joy Revivify Hydra Renew Regenerating Night Cream",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/160/3x_er42-ed.jpg",
                        "price": "Rs 400"
                    },
                    {
                        "discription": "Leeford Soft Soles Foot Care Cream for Healing and Soothing of Cracked Heels - 30gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/124/13_s9so-km.jpg",
                        "price": "Rs 112"
                    },
                    {
                        "discription": "L'Oreal Paris Age 30+ Skin Perfect Cream SPF 21 PA+++ (50gm)",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/125/27_aan3-l4.jpg",
                        "price": "Rs 560"
                    },
                    {
                        "discription": "Shoon Fatt Cream Crackers 280g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/100/Untitled-3_idxn-iw.jpg",
                        "price": "Rs 290"
                    },
                    {
                        "discription": "Garnier Wrinkle Lift Anti-Ageing Cream 40 g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/160/1j_nm3d-m9.jpg",
                        "price": "Rs 416"
                    },
                    {
                        "discription": "Himalaya Bhringaraja Amla Anti-Hair Fall Cream 100ml (HIM-119)",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/100/3586.jpg",
                        "price": "Rs 128"
                    },
                    {
                        "discription": "Nivea soft Moisture Cream - 100ml",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/104/_MG_0112.jpg",
                        "price": "Rs 292"
                    },
                    {
                        "discription": "Darlet Spread Cream (Chocolate Jam) - 300 g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/154/2d_7416-9q.jpg",
                        "price": "Rs 260"
                    },
                    {
                        "discription": "Tropolite Non Dairy Whipped Topping Cream - 1Kg",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/157/tropolite.jpg",
                        "price": "Rs 350"
                    },
                    {
                        "discription": "Julie's Cocoro Black Wafer Sticks Vanilla Flavoured Cream 100g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/161/1j_0lqa-x8.jpg",
                        "price": "Rs 230"
                    },
                    {
                        "discription": "Julie's Peanut Butter Cream Filled Wafer Cubes Bag, 150 g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/161/1l_326r-zg.jpg",
                        "price": "Rs 270"
                    },
                    {
                        "discription": "Zydus Everyuth Moisturing Cold Cream 100 gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/161/4y_94cb-hk.jpg",
                        "price": "Rs 197"
                    },
                    {
                        "discription": "Kent Cream Mushroom Soup, 68 gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/162/ms.jpg",
                        "price": "Rs 85"
                    },
                    {
                        "discription": "Cornitos Nacho Crisps Cheesy Sour Cream & Onion 60 gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/162/2_yay5-c1.jpg",
                        "price": "Rs 110"
                    },
                    {
                        "discription": "Sebamed Baby Protective Facial Cream 200ml",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/172/Sebamed_Baby_Protective_Facial_Cream_50ml__MRP_990_.jpg",
                        "price": "Rs 990"
                    },
                    {
                        "discription": "Munchy's Cream Crackers 300gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/5/Untitled-23.jpg",
                        "price": "Rs 290"
                    },
                    {
                        "discription": "Glysolid Glycerin Cream For The Skin Protects Soften 250ml",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/107/6835.jpg",
                        "price": "Rs 350"
                    },
                    {
                        "discription": "Lotus Herbals Safe Sun Kids Sun Block Cream SPF 25 - 100gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/124/14_yahs-vx.jpg",
                        "price": "Rs 536"
                    },
                    {
                        "discription": "Shoon Fatt Cream Crackers -360 gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/133/Untitled-3-copy_lkkt-j6.gif",
                        "price": "Rs 290"
                    },
                    {
                        "discription": "JK Dairy Top Dairy Creamer - Creamier and Tastier - 800gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/top-800gm.jpg",
                        "price": "Rs 830"
                    },
                    {
                        "discription": "JK Dairy Top Dairy Creamer - Creamier and Tastier - 400gm",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/top-400gm.jpg",
                        "price": "Rs 419"
                    },
                    {
                        "discription": "Nescafe Creamy Delight 3 in 1 486g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/100/nescafe_creamy_delight_3_in_1.jpg",
                        "price": "Rs 550"
                    },
                    {
                        "discription": "White Rabbit Creamy Candy",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/101/_MG_4001.jpg",
                        "price": "Rs 220"
                    },
                    {
                        "discription": "Amul Milk Chocolate Smooth And Creamy 150 Grams",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/153/78b.jpg",
                        "price": "Rs 270"
                    },
                    {
                        "discription": "Keya Instant Soup - Creamy Mushroom Soup 48g (केय इन्स्टन्ट सुप - क्रिमि मशरुम सुप - ४८ ग्राम )",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/146/8_nk1v-xe.jpg",
                        "price": "Rs 88"
                    },
                    {
                        "discription": "Roza Sweet Chilli Sauce 730gm (No artificial flavor)",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/135/11_s8y3-09.jpg",
                        "price": "Rs 250"
                    },
                    {
                        "discription": "Cadbury Dairy Milk Silk Chocolate 60g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/101/_MG_3980.jpg",
                        "price": "Rs 145"
                    },
                    {
                        "discription": "Cadbury Dairy Milk Chocolate 52g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/101/_MG_3997.jpg",
                        "price": "Rs 80"
                    },
                    {
                        "discription": "Complan Royal Chocolate Jar - 1KG - With Free Red Mug",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/160/4b_hj9o-tq.jpg",
                        "price": "Rs 860"
                    },
                    {
                        "discription": "Weikfield Custard Powder Vanilla Flavour 500g (विकिफिल्ड कस्तर्ड पाउडर वानिला फ्लेवर)",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/100/weikfield_custard_powder_vanilla_flavour_f598-im.jpg",
                        "price": "Rs 270"
                    },
                    {
                        "discription": "Lux Velvet Touch Skin Cleansing Soap 95g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/101/_MG_3880.jpg",
                        "price": "Rs 35"
                    },
                    {
                        "discription": "Cadbury Dairy Milk Silk Oreo Milk Chocolate 130g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/101/_MG_3967.jpg",
                        "price": "Rs 350"
                    },
                    {
                        "discription": "Ben Nevis 500 ml Midnight Cookies Ice Cream - Chocolate Ice Cream With Cookies and Nuts",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/156/12_1p0u-po.jpg",
                        "price": "Rs 375"
                    },
                    {
                        "discription": "Nestle Cream - 160g",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/102/cream.jpg",
                        "price": "Rs 225"
                    },
                    {
                        "discription": "Dove Silky Nourishment Body Cream - 300ml",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/161/2d_5ved-gn.jpg",
                        "price": "Rs 399"
                    },
                    {
                        "discription": "Mcvities Tasties Bourbon Creams - 300g x 24pcs",
                        "image": "https://thulo.com/images/thumbnails/239/239/detailed/157/2020-06-26__1_.jpeg",
                        "price": "Rs 180"
                    }
                ],
                "name": "thulo"
            },
            {
                "data": [
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/8p4AAOSwLXxbP0RE/s-l225.jpg",
                        "discription": "Achromin Whitening Cream Skin Body Neck Hand Lighten Pigmentary Patches Age Spot",
                        "price": "$5.07"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/gjgAAOSw4mxdZNP0/s-l225.jpg",
                        "discription": "ZIAJA EYE CREAM WITH VITAMIN E MATURE SKIN",
                        "price": "$2.81"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/r0gAAOSwygFf~7ag/s-l225.jpg",
                        "discription": "Hemp Cream for Pain Relief EXTRA STRONG CREAM Arthritis & Back Pain Support NEW#",
                        "price": "$1.89 to $3.85"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/NYgAAOSwWYtgDu~3/s-l225.jpg",
                        "discription": "5 X Fashion Fair Cream Original FAST ACTION  No Box Fast Delivery",
                        "price": "$28.24"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/IzoAAOSwy6JdueMT/s-l225.jpg",
                        "discription": "Detox Day & Night Anti-Aging Moisturizer Face Cream with Collagen Ages 50-65",
                        "price": "$8.45"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/ElgAAOSwbX9gbiIy/s-l225.jpg",
                        "discription": "Skin Lightening Whitening Face/Body Brightening Cream Dark Spot Bleaching Serum",
                        "price": "$18.98 to $29.89"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/r3EAAOSw3xVguk-j/s-l225.jpg",
                        "discription": "Marvel Masterpieces 1994 Gold Foil Signature Series Cards, You Pick!",
                        "price": "$2.00 to $6.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/-PAAAOSwAPtbvyic/s-l225.jpg",
                        "discription": "NeoStrata Bionic Face Cream Travel Size 10g Sample x Lot of 6 pcs",
                        "price": "$24.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/laEAAOSwTpZeSAfO/s-l225.jpg",
                        "discription": "Sum37 Secret eye Cream 1mlx10ea film sample korea cosmetic",
                        "price": "$8.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/gA4AAOSw05VgisNh/s-l225.jpg",
                        "discription": "Deoproce Syn-ake Intensive Wrinkle Care Cream 100g - FREE SHIPPING",
                        "price": "$26.59"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/eAEAAOSwMDJgkzSk/s-l225.jpg",
                        "discription": "Pikachu 25/25 Pokemon 25th McDonalds HOLO & Non Holo You Pick Combine Shipping ",
                        "price": "$0.82 to $13.23"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/03YAAOSw8gVYAEqw/s-l225.jpg",
                        "discription": "The history of Whoo Jinyul Eye Cream max 40pcs Anti-wrinkle Anti-aging ",
                        "price": "$6.50 to $14.50"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/hHAAAOSwSDlgWEe7/s-l225.jpg",
                        "discription": "The Ordinary Azelaic Acid Suspension 10% Cream Acne Dullness skin tone Whitening",
                        "price": "$12.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/~6EAAOSwDk5Ttt3P/s-l225.jpg",
                        "discription": "Wholesale Natural Gemstone Round Spacer Loose Beads 4mm 6mm 8mm 10mm 12mm Pick",
                        "price": "$1.44 to $10.23"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/wKQAAOSwFfJcgUDu/s-l225.jpg",
                        "discription": "Regal Night Cream Anti-Wrinkle with Hyaluronic Acid Jojoba Oil ARGIRELINE 45ml",
                        "price": "$11.29"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/xp4AAOSwxFRgSu7e/s-l225.jpg",
                        "discription": "MEDI-PEEL Naite Thread Neck Cream 100ml",
                        "price": "$18.52"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/ZJwAAOSwJJRgwZqE/s-l225.jpg",
                        "discription": "New ListingBest Korean Nature Snail Cream Face Skin Care Serum Anti Wrinkles Acne Day Nigh",
                        "price": "$15.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/un8AAOSwcJJgwbOy/s-l225.jpg",
                        "discription": "New ListingSnail Essence Deep Moisturizing Face Cream Hydrating Anti Wrinkle Anti-Aging",
                        "price": "$7.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/RLgAAOSw9bRfYQRk/s-l225.jpg",
                        "discription": "100% Strong Hyaluronic Acid Serum Anti Wrinkle Face Cream 15ml Moisturiser care",
                        "price": "$6.59"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/gwMAAOSwbs9f9LV2/s-l225.jpg",
                        "discription": "2019 Topps WWE Smackdown Live 1-90 +Inserts (A4829) - You Pick - 10+ FREE SHIP",
                        "price": "$1.09 to $3.51"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/Q0sAAOSw37tV~NgF/s-l225.jpg",
                        "discription": "Oronine skin ointment 100g 3.53oz Medicated Cream Moisturizer Othuka h ointment",
                        "price": "$17.18"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/DJAAAOSw1VBfrNN-/s-l225.jpg",
                        "discription": "Sooryehan Hyobidam Fermentation Cream 50ml Anti Aging Wrinkle care Elastic Moist",
                        "price": "$75.79"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/370AAOSwvM5gGts7/s-l225.jpg",
                        "discription": "Christina Elastin Collagen Placental Enzyme Moisture Cream 60ml + Sample",
                        "price": "$28.09"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/0XkAAOSwc5JgeJyw/s-l225.jpg",
                        "discription": "Time Reversing Intense SkinGenistII Day SPF + Night + Eye Cream Oriflame 3pcs",
                        "price": "$65.60"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/bOkAAOSwNphWbZ7O/s-l225.jpg",
                        "discription": "GARBAGE PAIL KIDS MINIKINS SERIES 2 U PICK PAINTED YELLOW RED BLUE GREEN",
                        "price": "$1.69 to $149.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/fHcAAOSwokdgv7nV/s-l225.jpg",
                        "discription": "100% Original Sandal Beauty Cream   ",
                        "price": "$12.70"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/ZzIAAOSwI4VdZ2Ka/s-l225.jpg",
                        "discription": "AVEENO Active Naturals 1% Hydrocortisone Anti-Itch Cream 1 oz",
                        "price": "$9.92"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/d4MAAOSwJxBf94Vj/s-l225.jpg",
                        "discription": "Dr Schrammek Time Control Day Cream 50ml NEW FAST SHIP",
                        "price": "$104.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/0jQAAOSwdLpfnuPV/s-l225.jpg",
                        "discription": "1 KOJIC CLEAR CREAM WITH LEMON  (AUTHENTIC)",
                        "price": "$14.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/hIkAAOSwOb5fauMe/s-l225.jpg",
                        "discription": "CINCI CREAM LAGER BEER IMPORTED Lapel Pin ",
                        "price": "$2.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/ziIAAOSwGQ1gbq-K/s-l225.jpg",
                        "discription": "Su:m37 Sum37 Centenica Set (Cream 5ml + Eye Cream 5ml) #Premium Line, Noble Skin",
                        "price": "$66.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/AoEAAOSw9QNgcxzX/s-l225.jpg",
                        "discription": "Sisley Creme Reparatrice-Restorative Facial Cream 80ml(4ml×20pcs)",
                        "price": "$85.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/TpoAAOSwpbFgm1b6/s-l225.jpg",
                        "discription": "NEW La prairie skin caviar luxe cream 5ml/0.17Fl oz ",
                        "price": "$45.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/JT4AAOSwTORa1jih/s-l225.jpg",
                        "discription": "Pevonia RS2 R S 2 Care Cream Rosacea Skin 50ml / 1.7oz NEW",
                        "price": "$72.75"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/6TYAAOSwmP5ejjLj/s-l225.jpg",
                        "discription": "2009-10 09-10 Upper Deck Champ's Champs Green Parallel Pick From List !!",
                        "price": "$0.83 to $4.14"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/-WkAAOSw57ZcgT1V/s-l225.jpg",
                        "discription": "Regal Day Cream Anti-Wrinkle with Hyaluronic Acid UV A + UV B ARGIRELINE 45ml",
                        "price": "$11.29"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/KDYAAOSwpTFgR8zu/s-l225.jpg",
                        "discription": "Sumifun Treatment Psoriasis Cream Antibacterial Antipruritic Herbal Ointment",
                        "price": "$11.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/nDkAAOSwrcpgsVm~/s-l225.jpg",
                        "discription": "Dark Spot Corrector Remover for Face Melasma Treatment Fade Cream with Kojic C,",
                        "price": "$28.75"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/EwQAAOSwpElgwbsh/s-l225.jpg",
                        "discription": "New ListingNeck Wrinkle Remover Cream Anti-Ageing Neck Firming Skin Whitening Serum UK",
                        "price": "$7.35"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/X-cAAOSwMJpgwc8J/s-l225.jpg",
                        "discription": "New ListingCHOSUNGAH BEAUTY Real Lacto Water Cream 50ml",
                        "price": "$95.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/k3AAAOSw4TVeTXB4/s-l225.jpg",
                        "discription": "CELLCURE PAL-RGD INTENSE FIRMING NECK CREAM 50ml - WRINKLE & ELASTICITY CARE ",
                        "price": "$25.00"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/YesAAOSwlBtepiYw/s-l225.jpg",
                        "discription": "2016-17 Hockey UD Series 1 Jumbo Base Parallel U Pick from list ",
                        "price": "$0.82"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/ME8AAOSwCVlguK9k/s-l225.jpg",
                        "discription": "Eminence Tropical Vanilla Day Cream SPF 40 2 oz / 60 ml",
                        "price": "$65.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/f8sAAOSwWy5dk31m/s-l225.jpg",
                        "discription": "Guinot Age Summum Immunity Creme Immunite Anti-Age Visage 5 Samples Brand New",
                        "price": "$24.75"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/FYQAAOSwyRVgjJa5/s-l225.jpg",
                        "discription": "2 x Faiiza Beauty (By Poonia Brothers) Whitening Cream 100%Original ",
                        "price": "$13.91"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/JmcAAOSw31Jf6UYG/s-l225.jpg",
                        "discription": "AHC Youth Lasting Real Eye Cream for face Season 9 Special Set Korea Cosmetic",
                        "price": "$131.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/5H8AAOSwLe5au7Sr/s-l225.jpg",
                        "discription": "Kane Film Stars Cards from 1955 - VGC! - Pick and Choose The Cards You Need",
                        "price": "$1.40"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/dHcAAOSwydpbGTOf/s-l225.jpg",
                        "discription": "Krauterhof Face Cream with Marigold Shooting Anti-wrinkle 100 ml",
                        "price": "$8.15"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/pqIAAOSwSBpfwTbi/s-l225.jpg",
                        "discription": "DERMALOGICA SKIN SMOOTHING CREAM SALON PRO SIZE 6OZ 177MLFRESH AUTHENTIC ",
                        "price": "$54.99"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/8-sAAOSwQuZgrTmi/s-l225.jpg",
                        "discription": "Cellulite Defense Gel-Cream - Anti Cellulite Body Treatment for Firming & Toning",
                        "price": "$36.78"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/xc4AAOSwAQBaqkZn/s-l225.jpg",
                        "discription": "Mon Platin Collagen Age Anti-Wrinkle Cream SPF15 Enriched With Black Caviar 50ml",
                        "price": "$39.95"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/Q1AAAOSw-tlggMnx/s-l225.jpg",
                        "discription": "2020-21 SYNERGY FX Purple Inserts #/349 Pick From List !!",
                        "price": "$2.07 to $3.31"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/0zkAAOSw0ileS~mp/s-l225.jpg",
                        "discription": "CeraVe SA Smoothing Moisturising Cream 340g for Dry Rough Bumpy Skin",
                        "price": "$56.77"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/SjEAAOSw74xeMgPc/s-l225.jpg",
                        "discription": "Yonka Sunscreen Cream High Protection 50ml / 1.65oz NEW SAME DAY SHIP",
                        "price": "$37.75"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/3rgAAOSwylpfvnz1/s-l225.jpg",
                        "discription": "Avon Anew Clinical Lift & Firm Eye Lift System - Upper Eye Gel+Under Eye Cream ",
                        "price": "$11.23"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/YmAAAOSwm2Rgj4Sh/s-l225.jpg",
                        "discription": "Huxley CREAM FRESH AND MORE 50ml",
                        "price": "$22.46"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/2awAAOSwUYpdAOcw/s-l225.jpg",
                        "discription": "Weetabix 3D Our Pets Cards from 1961 - VGC!! - Pick The Cards You Need!",
                        "price": "$1.40"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/f2MAAOSwumxcol32/s-l225.jpg",
                        "discription": "Guinot creme long life-long life cream 100ml",
                        "price": "$109.61"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/w3UAAOSwAEheGkKZ/s-l225.jpg",
                        "discription": "Dove Rich Nourishment Cream 75ml",
                        "price": "$4.93"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/MFYAAOSwxeVeZ0LY/s-l225.jpg",
                        "discription": "[MISSHA] Vita C Plus Spot Correcting & Firming Cream 50ml",
                        "price": "$24.47"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/FKQAAOSwoZ5gwHFX/s-l225.jpg",
                        "discription": "TOSOWOONG Men’s Booster Natural BB Cream 50ml",
                        "price": "$34.90"
                    },
                    {
                        "image": "https://i.ebayimg.com/thumbs/images/g/tdcAAOSwGM5dGe0L/s-l225.jpg",
                        "discription": "Biocare GemBlue Shea Butter Skin Cream 500ml",
                        "price": "$29.65"
                    }
                ],
                "name": "ebay"
            },
            {
                "data": [],
                "name": "amazon"
            }
        ],
        name:''
    }
updtvalue = (event) => {  
    // console.log(event.nativeEvent)  
    // const {eventCount, target, text} = event.nativeEvent;
    this.setState({name:event.nativeEvent.text});
  };
sendval=(event)=>{
    console.log(event.nativeEvent.text)
    axios.get('http://127.0.0.1:8000/searchdata/',{
        headers:{

          'name':event.nativeEvent.text,
        }
      })
    .then(res =>{
        console.log(res.data)
        this.setState({data:res.data.data});
    })

}
    render(){
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor:"#fff",
                paddingHorizontal:20
            }}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    marginTop:40,
                    alignItems:"center"
                }}>
                    <View style={{
                        width:"50%"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:22
                        }}>Nepal Shop</Text>
                    </View>
                    <View style={{
                        width:"50%",
                        alignItems:"flex-end"
                    }}>
                        <Image
                          source={require('../images/bag-2.png')}
                          style={{width:16,height:20}}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:"100%",
                    marginVertical:30
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        elevation:2,
                        width:"85%",
                        backgroundColor:"#FFF",
                        paddingHorizontal:20,
                        height:35,
                        borderRadius:10,
                        marginLeft:1
                    }}>
                        <Icon name="ios-search"
                           size={22}
                           color="#4f4a4a"
                           />
                            <TextInput
                                placeholder="Search product here  ......"
                                style={{
                                fontFamily:"Medium",
                                paddingHorizontal:10,
                                fontSize:12
                            }}
                            value={this.state.name}
                            onChange={this.updtvalue}
                            onSubmitEditing = {this.sendval}
                            />
                            </View>
                            
                            
                            <View style={{
                                alignItems:"center",
                                elevation:2,
                                width:"15%",
                                backgroundColor:"#FFF",
                                marginLeft:5,
                                height:35,
                                borderRadius:10,
                                marginLeft:1,
                                justifyContent:"center"
                            }}>
                                <Image
                                source={require('../images/sort.png')}
                                style={{
                                    width:18,height:25
                                }}
                                />
                            </View>
                   
                </View>
                {this.state.data.map((new_val,i)=>(
                    <View>
                        <View style={{
                    flexDirection:"row",
                    width:"100%",
                    alignItems:"center",
                    marginTop:10,
                }}>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:18,
                        color:"#4f4a4a",
                        textTransform :'capitalize'
                    }}>
                        {new_val.name}
                    </Text>
                    <View style={{
                        width:5,
                        height:5,
                        borderRadius:5,
                        marginHorizontal:5,
                        backgroundColor:"#4f4a4a"
                    }}></View>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:9,
                        color:"#4f4a4a"
                    }}>
                        Good Quality items
                    </Text>
                </View>
                <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       { new_val.data.map((val,i)=>(
                             <Couches
                            src={{uri: val.image}}
                            name={val.discription.substring(0, 13) +"..."}
                            description={val.discription}
                            price={val.price}
                            // onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />
                         ))}
                       {/* <Couches
                            src={require('../images/1.png')}
                            name="Beautiful Couches"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />
                         <Couches
                            src={require('../images/2.png')}
                            name="Autobe best chair"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />
                         <Couches
                            src={require('../images/1.png')}
                            name="Beautiful Couches"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       /> */}

                    </ScrollView>
                    </View>



                ))}

                


                    


                    <View style={{
                        flexDirection:"row",
                        marginTop:30,
                        marginBottom:10,
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#4f4a4a",
                            fontSize:20
                        }}>
                            New Arrivals
                        </Text>
                        <View style={{
                            height:5,
                            width:5,
                            borderRadius:5,
                            backgroundColor:"#4f4a4a",
                            marginHorizontal:4
                        }}>
                        </View>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:10,
                            color:"#4f4a4a"
                        }}>
                            Good Quality items
                        </Text>
                    </View>

                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                       

                        <New
                         src={require('../images/sofa.png')}
                        />
                        <New
                        src={require('../images/lr.png')}
                        />
                        <New
                        src={require('../images/sofa.png')}
                        />
                    </ScrollView>

                    <Text style={{
                        marginTop:20,
                        color:"#4f4a4a",
                        fontSize:18,
                        fontFamily:"Bold"
                    }}>
                        Best Sellers
                    </Text>
            
            
            <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal>

                    <Best/>
                    <Best/>
                    <Best/>
            </ScrollView>


            </ScrollView>
        );
    }
}