### PROJECT OVERVIEW:


#### SECTIONS:
- **Bank Cards** (type - 0) :  buyer-listing / cardholder-listing
- **Flights** (type - 1) :  included in bank cards
- **Gift Cards**  (type - 2) :  buy-gift-cards / sell-gift-cards
- **Recharges**  (type - 3 ) : recharge-bill-offers
    1. *Prepaid* (subtype - 1)
    2. *DTH* ( subtype - 2)
- **Bills** (type - 4) : recharge-bill-offers
    1. *Postpaid* (subtype - 1)
    2. *Electricity* (subtype - 2)
    3. *Broadband* (subtype - 3)
    4. *Landline* (subtype - 4)
    5. *Water* (subtype - 5)
    6. *Cable TV* (subtype - 6)

**Bank Cards/ Flights:**

- Buyer Flow:

![image](https://user-images.githubusercontent.com/68221353/133735820-95d90be5-36b1-4af4-8e5e-527bb3019d22.png)

- Cardholder Flow:

![image](https://user-images.githubusercontent.com/68221353/133735865-3a84ba76-ea63-4388-8a16-1ca773f4540e.png)

**Gift Cards:**

- Buyer:

![image](https://user-images.githubusercontent.com/68221353/133735905-0b89dd29-93ae-4255-a083-b8b276231c7d.png)

- Seller

![image](https://user-images.githubusercontent.com/68221353/133735952-e1fe89fb-cf04-4ee0-bbbd-fcece2be5d0e.png)

**Recharges/ Bill Payments**

- Buyer

![image](https://user-images.githubusercontent.com/68221353/133735986-7e8c8c5c-edf4-4ede-b4cb-9e2f11e35dea.png)

- seller
![image](https://user-images.githubusercontent.com/68221353/133736030-77e4b584-446f-44f5-acd3-3351af0fd3f6.png)

**Mobile Prepaid**

- Buyer

![image](https://user-images.githubusercontent.com/68221353/133736075-1978dcf4-60e4-45f7-bc08-dbf73bbe2487.png)

- Seller

![image](https://user-images.githubusercontent.com/68221353/133736365-194ecc3c-25a6-4e0a-898d-0d42dc70f81f.png)



### Access Control


- Hosted on - UMC/UMS Server
- Production DB - Buyhatke DB
- Testing - Buyhatke Test DB
- Solr Access - flip4 server

p2p repo @Buyhatke/p2p https://github.com/Buyhatke/p2p
SOLR http://flip4.buyhatke.com:8983/solr/#/deals_umc/query
UMC CRM Panel https://buyhatke.com/crm_wallet/crm/index.php?rand=55910

#### Hangouts Groups
UMC Product
Usemycards.com
UMC Panel
UMC App
UMC Emails

#### API - Postman collection
https://www.getpostman.com/collections/b16c1bda7aa4f39368f0

#### Product Discussions
https://docs.google.com/document/d/1uac3tGJIlolWu5mp0DpSiH-D9hcWll6qugOzhzIdcKQ/edit
https://docs.google.com/document/d/14q3fyVLm2vut5_0HzhoGZJPHFZTmSJu9jgcJevBbgsI/edit?pli=1#heading=h.b8i7cmfsy0wf



### Details of fields of schema of UMC
<!-- TABLE OF CONTENTS -->
<details open="open">

  <summary>Table of Contents</summary>
 <hr>
 <p>Profile Tables (User Email/Bank Details/Kyc)</p>
  <ol>
    <li><a href="#wallet-users"> wallet users</a></li>
    <li><a href="#global-login-users"> global Login Users</a></li>
    <li><a href="#p2p-user-profile"> p2p user profile</a></li>
    <li><a href="#user-kyc">User kyc</a></li>
   <li><a href="#upi-details">Upi details</a></li>
    <li><a href="#bank-details">Bank  details</a></li>
     <li><a href="#user-address">User  address</a></li>
      <li><a href="#referral">Referral</a></li>
      <li><a href="#p2p-bank-details">p2p bank details</a></li>
</ol>
  <p>Recharge Flow Tables</p>
  <ol>
   <li><a href="#recharge-plans">Recharge plans</a></li>
    <li><a href="#operator-circle-dump">Operator circle dump</a></li>
    <li><a href="#recharge-matches">Recharge matches</a></li>
    <li><a href="#recharge-status-logs">Recharge status logs</a></li>
    <li><a href="#recharge-seller">Recharge seller</a></li>
  </ol>
  
<p>Wallet transaction table</p>
<ol>
 <li><a href="#wallets">Wallets</a></li>
 <li><a href="#inr-transactions-p2p">Inr transactions p2p</a></li>
</ol>
<p>Login/Signup/Telegram Tables</p>
<ol>
 <li><a href="#android-users">Android users</a></li>
 <li><a href="#telegram-umc">Telegram umc</a></li>
 <li><a href="#telegram-token-mapping-umc">Telegram token mapping umc</a></li>
  <li><a href="#token-mapping">Token mapping</a></li>
  <li><a href="#user-credentials">User credentials</a></li>
  <li><a href="#user-token-mapping">User token mapping</a></li>
</ol>
<p> Cron tables</p>

<ol>
 <li><a href="#umc-crons">Umc crons</a></li>
</ol>
<p>Umc card related tables</p>
<ol>
 <li><a href="#card-list">Card list</a></li>
  <li><a href="#buyers-req"> Buyers req </a></li>
   <li><a href="#sellers-req">Sellers req </a></li>
 <li><a href="#incomplete-requests-p2p">Incomplete requests p2p</a></li>
 <li><a href="#buyer-special-req"> Buyer special req</a></li>
 <li><a href="#umc-deals"> Umc deals</a></li>
 <li><a href="#umc-cardholder-intimation"> Umc cardholder intimation</a></li>
 <li><a href="#umc-type-stats"> Umc type stats</a></li>
 <li><a href="#rating-comments"> Rating comments</a></li>
<li><a href="#user-submitted-offers"> User submitted offers</a></li>
<li><a href="#mark-out-of-stock"> Mark out of stock</a></li>
<li><a href="#match-rating-log"> Match rating log</a></li>
<li><a href="#match-req"> Match req</a></li>
<li><a href="#hypto-upi-deposit">Hypto upi deposit</a></li>
</ol>

<p>Gift card related tables</p>
<ol>
<li><a href="#gv-Remaining-Buy-Quantities">Gv  Remaining Buy Quantities</a></li>
</ol>
<p>Log tables</p>
<ol>
  <li><a href="#transaction-log">Transactionlog</a></li>
  <li><a href="#status-change-logs">Status change logs</a></li>
  <li><a href="#recharge-rating-logs">Recharge rating logs</a></li>
  <li><a href="#referral-logs"> Referral logs</a></li>
</ol>
<p>Other tables</p>
<ol>
  <li><a href="#umc-stats"> Umc stats</a></li>
  <li><a href="#p2p-feedback">p2p feedback</a></li>
  <li><a href="#deals-suggested-updates">Deals suggested updates</a></li>
  <li><a href="#registration-source">Registration source</a></li>
  <li><a href="#flip-PID-table">Flip PID table</a></li>
  <li><a href="#amaz-PID-table">Amaz PID table</a></li>
</ol>
<p>Ununsed tables</p>
<ol>
 <li><a href="#sms-feedback">Sms feedback </a></li>
 <li><a href="#sms-alert-emails">Sms alert emails </a></li>
</ol>

</details>
<p>status meaning:		-1 cancelled 	0 just matched	1 user added money	2 money add verified		3 credentials submited		4 order placed	5 order confirmed	14 password changed	6 ordered delivered	7 settled	8 amazon seller cancelled		9 some other problem with the order	10 dispute		11 settled with dispute	12 want to get a refund by return	13 product picked up		15 order not placed</p>


#### wallet users

(buyhatke_wallet.users)

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id

   </td>
   <td>A simple id to identify user, this is the primary key
   </td>
  </tr>
  <tr>
   <td>email_id
   </td>
   <td> Email id of the user
   </td>
  </tr>
  <tr>
   <td>name
   </td>
   <td> Name of the user
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> inserted time
   </td>
  </tr>
   <td>referral
   </td>
   <td> referral code used while signing up
   </td>
  </tr>
   <td>myReferral
   </td>
   <td> referral code of the user
   </td>
  </tr>
   <td>hasExt
   </td>
   <td> if the user has extension installed
   </td>
  </tr>
   <td>hasReferral
   </td>
   <td> referral code
   </td>
  </tr>
   <td>phonePe
   </td>
   <td> 
   </td>
  </tr>
   <td>mobile
   </td>
   <td> user mobile number
   </td>
  </tr>
   <td>password
   </td>
   <td> password
   </td>
  </tr>
   <td>secret_2fa
   </td>
   <td> 2fa authorization
   </td>
  </tr>
   <td>ffs_user
   </td>
   <td> this is to indicate if a user registers through flightsforsure
   </td>
  </tr>
</table>


#### global Login users

(buyhatke_gLogin.users)

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id

   </td>
   <td>A simple id to identify user, this is the primary key
   </td>
  </tr>
  <tr>
   <td>email_id
   </td>
   <td> Email id of the user
   </td>
  </tr>
  <tr>
   <td>password_hash
   </td>
   <td>??
   </td>
  </tr>
  <tr>
   <td>pic
   </td>
   <td> profile pic of the user
   </td>
  </tr>
   <td>name
   </td>
   <td> name of the user
   </td>
  </tr>
</table>


#### p2p user profile
(buyhatke_wallet.p2p_user_profile)

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id

   </td>
   <td>A simple id to identify user, this is the primary key
   </td>
  </tr>
  <tr>
   <td>user_name
   </td>
   <td> name of the user
   </td>
  </tr>
  <tr>
   <td>ph_no
   </td>
   <td>phone number of the user
   </td>
  </tr>
  <tr>
   <td>ph_public
   </td>
   <td>?? 
   </td>
  </tr>
   <td>email
   </td>
   <td>  email id  of the user 
   </td>
  </tr>
  <tr>
   <td>rating_no
   </td>
   <td>  total  rating number count 
   </td>
  </tr>
  <tr>
   <td>rating
   </td>
   <td>rating given by the seller 
   </td>
  </tr>
  <tr>
   <td>tip_rating
   </td>
   <td>??
   </td>
  </tr>
  <tr>
   <td>behaviour_rating
   </td>
   <td>rating on behaviour of the seller
   </td>
  </tr>
  <tr>
   <td>resp_tip_time
   </td>
   <td>??
   </td>
  </tr>
  <tr>
   <td>my_referral
   </td>
   <td>user referral code 
   </td>
  </tr>
  <tr>
   <td>telegram_user_name
   </td>
   <td>user name in telegram
   </td>
  </tr>
  <tr>
   <td>time_stamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>

#### User kyc


<table>
   <tr>
   <td><strong> Field Name
   </td>
   <td> <strong> Description
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>user id number ,this is the primary key
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple identity of the user ,this is foreign key
   </td>
  </tr>
  <tr>
   <td>pan_name
   </td>
   <td>name of the user on pan card 
   </td>
  </tr>
  <tr>
   <td>pan_dob
   </td>
   <td>date of birth of the user 
   </td>
  </tr>
  <tr>
   <td>pan_num
   </td>
   <td>pan card number of the user
   </td>
  </tr>
  <tr>
   <td>addr_num
   </td>
   <td>address number on  pan card
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>status  of the kyc completed or not.
   </td>
  </tr>
  <tr>
   <td>rejection_reason
   </td>
   <td>reason for the kyc rejection 
   </td>
  </tr>
  <tr>
   <td>comments
   </td>
   <td>message
   </td>
  </tr>
</table>

#### Upi details


<table>
   <tr>
   <td><strong> Field Name
   </td>
   <td> <strong> Description
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>user id number ,this is the primary key
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple identity of the user ,this is foreign key
   </td>
  </tr>
  <tr>
   <td>upi_id
   </td>
   <td>Unified Payments Interface id number
   </td>
  </tr>
  <tr>
   <td>time_added
   </td>
   <td>??
   </td>
  </tr>
</table>




**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Bank details 


<table>
   <tr>
   <td><strong> Field Name
   </td>
   <td><strong>Description
   </td>
  </tr>
  <tr>
   <td>acc_id
   </td>
   <td>account identity number , this is primary key
   </td>
  </tr>
  <tr>
   <td>acc_no
   </td>
   <td>bank account number
   </td>
  </tr>
  <tr>
   <td>bank_name
   </td>
   <td>name of the bank
   </td>
  </tr>
  <tr>
   <td>branch_name
   </td>
   <td>bank branch address
   </td>
  </tr>
  <tr>
   <td>acc_type
   </td>
   <td>account type  saving or current
   </td>
  </tr>
  <tr>
   <td>acc_user_name
   </td>
   <td>bank account holder name
   </td>
  </tr>
  <tr>
   <td>mobile
   </td>
   <td>Phone number of the account holder
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple user identity
   </td>
  </tr>
  <tr>
   <td>is_selected
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>
<!-- ***** bank details table completed ****** -->


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**


#### User address


<table>
   <tr>
   <td><strong> Field Name
   </td>
   <td> <strong> Description
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td>buyer order identity, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple identity of the user ,this is foreign key
   </td>
  </tr>
  <tr>
   <td>address
   </td>
   <td> full address of the user
   </td>
  </tr>
  <tr>
   <td>phone_no
   </td>
   <td> phone number of the user
   </td>
  </tr>
</table>


#### Referral


<table>
   <tr>
   <td><strong> Field Name
   </td>
   <td> <strong> Description
   </td>
  </tr>
  <tr>
   <td>referred_uid
   </td>
   <td>referred person user id , this is primary key
   </td>
  </tr>
  <tr>
   <td>referral_uid
   </td>
   <td>?
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td> present condition of the user
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>amount
   </td>
   <td>referral amount
   </td>
  </tr>
</table>


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### p2p bank details


<table>
   <tr>
   <td><strong> Field Name
   </td>
   <td> <strong> Description
   </td>
  </tr>
  <tr>
   <td>acc_id
   </td>
   <td>a unique number used to identify your Authorized Buyers account.
   </td>
  </tr>
  <tr>
   <td>acc_no
   </td>
   <td>bank account number of the buyer
   </td>
  </tr>
  <tr>
   <td>bank_name
   </td>
   <td> name of the bank
   </td>
  </tr>
  <tr>
   <td>branch_name
   </td>
   <td> name and address of the bank
   </td>
  </tr>
  <tr>
   <td>acc_type
   </td>
   <td> type of the account saving or current
   </td>
  </tr>
  <td>acc_user_name
   </td>
   <td> name of the account holder
   </td>
  </tr>
  <td>phone_no
   </td>
   <td> phone number of the account holder
   </td>
  </tr>
  <td>user_id
   </td>
   <td>  a simple identity of the user
   </td>
  </tr>
  <td>is_selected
   </td>
   <td> selection  present status
   </td>
  </tr>
</table>



**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

  <p>Recharge Flow Tables</p>


#### Recharge plans  


<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
<tr>
   <td>plan_id
   </td>
   <td>existing plan identity , this is the primary key.
   </td>
  </tr>
  <tr>
   <td>paytm_ref
   </td>
   <td>paytm reference number ,this is foreign key.
   </td>
  </tr>
  <tr>
   <td>operator
   </td>
   <td>operator is service provider example airtel
   </td>
  </tr>
  <tr>
   <td>circle
   </td>
   <td>circle of states 
   </td>
  </tr>
  <tr>
   <td>description
   </td>
   <td>Local, STD & Roaming calls on any network
   </td>
  </tr>
  <tr>
   <td>price
   </td>
   <td>amount to pay
   </td>
  </tr>
  <tr>
   <td>sms
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>sms_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>data
   </td>
   <td>mobile internet data
   </td>
  </tr>
  <tr>
   <td>data_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>talktime
   </td>
   <td>the time during which a mobile telephone is in use to handle calls.
   </td>
  </tr>
  <tr>
   <td>validity
   </td>
   <td>number of days 
   </td>
  </tr>
  <tr>
   <td>countries
   </td>
   <td> mobile number using country 
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>present recharge order status
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>
<!-- ***** Recharge plan table completed ****** -->

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**


#### Operator Circle Dump


<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>id number of the user , this is the primary key.
   </td>
  </tr>
  <tr>
   <td>mobile
   </td>
   <td>Phone number of the user
   </td>
  </tr>
  <tr>
   <td>operator
   </td>
   <td>operator  is service provider  ex. airtel,Bsnl
   </td>
  </tr>
  <tr>
   <td>circle
   </td>
   <td>circle of states 
   </td>
  </tr>
  <tr>
   <td>last_modified
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  
</table>
 <!-- ***** operator circle table completed ****** -->


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**


#### Recharge matches


<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>match_id
   </td>
   <td>matchid is  a matching  between seller and and buyer , this is primary key.
   </td>
  </tr>
  <tr>
   <td>s_order_id
   </td>
   <td>seller order id ,this is foreign key
   </td>
  </tr>
  <tr>
   <td>buyer_uid
   </td>
   <td>a simple identity of the buyer, this is foreign key
   </td>
  </tr>
  <tr>
   <td>seller_uid
   </td>
   <td>a simple identity of the seller, this is foreign key
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td> <p>-1 cancelled ,0 just matched,
      	1 user added money,	2 money add verified,3 credentials submited	,	4 order placed,	5 order confirmed	,	6 ordered delivered	
      </p>
   </td>
  </tr>
  <tr>
   <td>plan_id
   </td>
   <td>existing plan id
   </td>
  </tr>
  <tr>
   <td>mobile
   </td>
   <td>recharge  phone number  
   </td>
  </tr>
  <tr>
   <td>plan_amt
   </td>
   <td>price of the selected plan
   </td>
  </tr>
  <tr>
   <td>amount
   </td>
   <td>amount  to be paid 
   </td>
  </tr>
  <tr>
   <td>time_to_complete
   </td>
   <td>time taking to complete the order 
   </td>
  </tr>
  <tr>
   <td>order_id
   </td>
   <td>after completion of order it has a orderid
   </td>
  </tr>
  <tr>
   <td>comments
   </td>
   <td>message
   </td>
  </tr>
  <tr>
   <td>completion_time
   </td>
   <td>timestamp of after completion of the order
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>will_place_order
   </td>
   <td>order placing details , status of the order
   </td>
  </tr>
</table>
<!-- ***** Recharge matches table completed ****** -->

#### Recharge status logs


<table>
  <tr>
   <td><strong> Field Name
   </td>
   <td><strong>Description
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>a simple user identity, this is primary key.
   </td>
  </tr>
  <tr>
   <td>match_id
   </td>
   <td>matchid number is  a matching  between seller and and buyer, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>	<p>	-1 cancelled 	,0 just matched	,1 user added money,	2 money add verified	,	3 credentials submited,		4 order placed</p>
   </td>
  </tr>
  <tr>
   <td>last_modified
   </td>
   <td>the records of when information is being exchanged or created
   </td>
  </tr>
</table>
<!-- ***** Recharge status  log table completed ****** -->
**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Recharge seller 


<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  
  <tr>
   <td>s_order_id
   </td>
   <td>seller order identity , this is the primary key.
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple identity of the user, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>operator
   </td>
   <td>operator is service provider example airtel
   </td>
  </tr>
  <tr>
   <td>price_buckets
   </td>
   <td> service provider charges a periodic (usually monthly) fixed price .
   </td>
  </tr>
  <tr>
   <td>circle_excep
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>recharge order status ,0 just matched, 1 user added money.
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>
<!-- ***** Recharge seller table completed ****** -->

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

<p>Wallet transaction table</p>

#### Wallets 


<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  
  <tr>
   <td>wallet_id
   </td>
   <td>user wallet id number, this is the primary key
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple identity of the user, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>credits
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>NWI
   </td>
   <td> Non withdrawal inr
   </td>
  </tr>
  <tr>
   <td>referral_credits
   </td>
   <td>referral earned credits 
   </td>
  </tr>
  <tr>
   <td>referral_nwi
   </td>
   <td>non withdrawal inr referral
   </td>
  </tr>
  <tr>
   <td>last_updated
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>paypal_credits
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>amaz_credits
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>flip_credits
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>phonepe_credits
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>hatke_points
   </td>
   <td>
   </td>
  </tr>
</table>
<!-- ***** Wallets table completed ****** -->
**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**


#### Inr transactions p2p 


<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  
  <tr>
   <td>inr_tran_id
   </td>
   <td>inr transaction identity number
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple identity of the user, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>amount
   </td>
   <td> total amount to pay
   </td>
  </tr>
  <tr>
   <td>process_fee
   </td>
   <td>payment process fee
   </td>
  </tr>
  <tr>
   <td>reference_no
   </td>
   <td>reference number
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>12 want to get a refund by return,	13 product picked up
   </td>
  </tr>
  <tr>
   <td>file_id
   </td>
   <td>file id number 
   </td>
  </tr>
  <tr>
   <td>acc_id
   </td>
   <td>buyer account indentity number
   </td>
  </tr>
  <tr>
   <td>referral_amt
   </td>
   <td>referral amount earned 
   </td>
  </tr>
  <tr>
   <td>app_id
   </td>
   <td>application id 
   </td>
  </tr>
  <tr>
   <td>instant
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>trials
   </td>
   <td> 
   </td>
  </tr>
  <tr>
   <td>hash
   </td>
   <td>
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

<p>Login/Signup/Telegram Tables</p>

#### Android Users

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id

   </td>
   <td>A simple id to identify user, this is the primary key
   </td>
  </tr>
  <tr>
   <td>fcm_registration token
   </td>
   <td>An FCM token is commonly registration token like in google cloud messaging.
   </td>
  </tr>
</table>
   <!-- ***** first table completed ****** -->

   **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Telegram umc

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>A simple id to identify user, this is the primary key
   </td>
  </tr>
  <tr>
   <td>chat_id
   </td>
   <td>user chat id number
   </td>
  </tr>
  <tr>
   <td>user_name
   </td>
   <td> telegram  user name 
   </td>
  </tr>
</table>



 **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Telegram token mapping umc

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>A simple id to identify user, this is the primary key
   </td>
  </tr>
  <tr>
   <td>token
   </td>
   <td>token number, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Token mapping 

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>token_id
   </td>
   <td> token id , this is the primary key
   </td>
  </tr>
  <tr>
   <td>email
   </td>
   <td>email id of the user .
   </td>
  </tr>
  <tr>
  <td>expiry
   </td>
   <td> this field denote  token as expiry date
   </td>
  </tr>
<td>id
   </td>
   <td> a simple id number of the user.
   </td>
  </tr>
  <tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### User credentials 

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td>buyer order identity, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>login_password
   </td>
   <td>secret login password
   </td>
  </tr>
  <tr>
   <td>login_id
   </td>
   <td> login identity email or phonenumber
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> a simple user indentity, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>new_entry
   </td>
   <td> ??
   </td>
  </tr>
  <tr>
   <td>user_cardholder_account
   </td>
   <td> ??
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### User token mapping 

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> A simple user indentity , this is the primary key.
   </td>
  </tr>
  <tr>
   <td>entry_id
   </td>
   <td>unique entry for every user
   </td>
  </tr>
  <tr>
   <td>session_id
   </td>
   <td> 
   </td>
  </tr>
  <tr>
   <td>flag
   </td>
   <td> 
   </td>
  </tr>
  <tr>
   <td>expiry_time
   </td>
   <td>this field denote  expire time  of order
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

<p> Cron tables</p>

#### Umc crons


<table>
  <tr>
   <td><strong> Field Name
   </td>
   <td><strong>Description
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>id number,this is the primary key.
   </td>
  </tr>
  <tr>
   <td>file
   </td>
   <td>name of the file 
   </td>
  </tr>
  <tr>
   <td>function
   </td>
   <td>particular work doing by the function
   </td>
  </tr>
  <tr>
   <td>data
   </td>
   <td> detiails about log id 
   </td>
  </tr>
</table>
<!-- ***** umc crons table completed ****** -->

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Card list

 

<table>
  <tr>
   <td><strong>Field Name
   </td>
   <td><strong>Description
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>present condition of the card
   </td>
  </tr>
  <tr>
   <td>bank_id
   </td>
   <td>bank identity number
   </td>
  </tr>
  <tr>
   <td>card_type
   </td>
   <td>type of the card ex. master card, platinum card..
   </td>
  </tr>
  <tr>
   <td>provider_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>card_limit
   </td>
   <td>maximum card limit
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> a simple user id
   </td>
  </tr>
  <tr>
   <td>card_num
   </td>
   <td>card number
   </td>
  </tr>
  <tr>
   <td>card_variant
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>card_nick
   </td>
   <td>card nick name ex.hdfc,sbi..
   </td>
  </tr>
  <tr>
   <td>curr_limit
   </td>
   <td>current limit of the card
   </td>
  </tr>
  <tr>
   <td>reset_date
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>credit_time
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>delivery_days
   </td>
   <td>maximum number of  order delivery days
   </td>
  </tr>
  <tr>
   <td>tip_offered
   </td>
   <td>discount offered to the buyer
   </td>
  </tr>
  <tr>
   <td>only_instant
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>opted_out
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>fully_utilised
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>partially_utilised
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>last_modified
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**



#### Buyers req 
 
<table>
  <tr>
   <td><strong > Field Name
   </td>
   <td><strong> Description
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td>buyer order id number, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>bank_id
   </td>
   <td> buyer bank id number
   </td>
  </tr>
  <tr>
   <td>card_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>provider_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>delivery_days
   </td>
   <td>order delivery days
   </td>
  </tr>
  <tr>
   <td>prod_price
   </td>
   <td>price of the buying product
   </td>
  </tr>
  <tr>
   <td>dis_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>credit_time
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>offer_details
   </td>
   <td> maximum cashback and discount  details
   </td>
  </tr>
  <tr>
   <td>tip_offered
   </td>
   <td>commision  offered to the seller 
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>-1 cancelled ,	0 just matched,	1 user added money,	2 money add verified 
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> a simple  buyer user  id
   </td>
  </tr>
  <tr>
   <td>product_link
   </td>
   <td>buying product  link
   </td>
  </tr>
  <tr>
   <td>default_address
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>site_hostname
   </td>
   <td>product buying site ex.amazon,flipkart..
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>cashback_to
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>card_variant
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>deal_id
   </td>
   <td>deal id number
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>additional_fields
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>quantity
   </td>
   <td>number of products
   </td>
  </tr>
</table>
<!-- ***** buyer req table completed ****** -->



**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**



#### Sellers req 
 
<table>
  <tr>
   <td><strong > Field Name
   </td>
   <td><strong> Description
   </td>
  </tr>
  <tr>
   <td>s_order_id
   </td>
   <td>seller order id number, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>bank_id
   </td>
   <td>seller bank id number
   </td>
  </tr>
  <tr>
   <td>card_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>provider_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>card_limit
   </td>
   <td>card maximum credit limit 
   </td>
  </tr>
  <tr>
   <td>credit_time
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>tip_offered
   </td>
   <td>tip offered to the  buyer 
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>-1 cancelled, 0 just matched, 1 user added money, 2 money add verified .
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>simple seller user id number
   </td>
  </tr>
  <tr>
   <td>delivery_days
   </td>
   <td>maximum order delivery days
   </td>
  </tr>
  <tr>
   <td>only_instant
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>card_num
   </td>
   <td> credit card number 
   </td>
  </tr>
  <tr>
   <td>card_id
   </td>
   <td>card id number
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>query
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>card_variant
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>additional_fields
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>quantity
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>gvDiscountedPrice
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>subType
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>operator
   </td>
   <td>
   </td>
  </tr>
</table>
<!-- ***** seller req table completed ****** -->

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Incomplete requests p2p

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id

   </td>
   <td>A simple id to identify user, this is the primary key
   </td>
  </tr>
  <tr>
   <td>is_buyer
   </td>
   <td> 
   </td>
  </tr>
  <tr>
   <td>mail_sent
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**


#### Buyer special req

<table>
  <tr>
   <td> <strong >Field Name
   </td>
   <td><strong> Description
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td>buyer order identity number,this is the primary key.
   </td>
  </tr>
  <tr>
   <td>comment
   </td>
   <td>message
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple user id
   </td>
  </tr>
</table>
<!-- ***** buyer special req table completed ****** -->


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Umc deals

<table>
  <tr>
   <td> <strong >Field Name
   </td>
   <td><strong> Description
   </td>
  </tr>
  <tr>
   <td>deal_id
   </td>
   <td>deal identity number, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>day
   </td>
   <td>date of the deal
   </td>
  </tr>
  <tr>
   <td>start_time
   </td>
   <td>order starting time 
   </td>
  </tr>
  <tr>
   <td>end_time
   </td>
   <td>order ending time
   </td>
  </tr>
  <tr>
   <td>coupon_code
   </td>
   <td>coupon code of the any discount offer 
   </td>
  </tr>
  <tr>
   <td>description
   </td>
   <td>discription about product ,deal ,discount details 
   </td>
  </tr>
  <tr>
   <td>dis_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>per_disc
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>max_disc
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>bank_id
   </td>
   <td>bank id number
   </td>
  </tr>
  <tr>
   <td>card_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>provider_type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>card_variant
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>category_id
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>offer_link
   </td>
   <td>product offer link
   </td>
  </tr>
  <tr>
   <td>cashback_days
   </td>
   <td>number of days taking for the cashback
   </td>
  </tr>
  <tr>
  
   <td>cashback_to
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>website_id
   </td>
   <td>product buying website id number
   </td>
  </tr>
  <tr>
   <td>verf_status
   </td>
   <td>deal verification status
   </td>
  </tr>
  <tr>
   <td>used_cnt
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> a simple user id 
   </td>
  </tr>
  <tr>
   <td>tm_status
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>time_applicable
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>min_cart_val
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>time_added
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>applicable_on
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>product_name
   </td>
   <td>buying product name 
   </td>
  </tr>
</table>
<!-- ***** umc deals table completed ****** -->

**[⬆ Back to Top](#details-of-fields-of-schema-of-ctr)**

#### Umc cardholder intimation 

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>log_id

   </td>
   <td> login id email or phone number,this is the primary key.
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> A simple user id .
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td>buyer order id
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>medium
   </td>
   <td>??
   </td>
  </tr>
</table>


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Umc type stats

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td> a simple id of the user
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td> ??
   </td>
  </tr>
  <tr>
   <td>rating_count
   </td>
   <td>total number of ratings count from the users
   </td>
  </tr>
  <tr>
   <td>rating_avg
   </td>
   <td>average of the ratings from the users
   </td>
  </tr>
  <tr>
   <td>tip_rating
   </td>
   <td> total tips for the rating 
   </td>
  </tr>
  <tr>
   <td>behav_rating
   </td>
   <td>total behaviour ratings
   </td>
  </tr>
  <tr>
   <td>response_rating
   </td>
   <td>??
   </td>
  </tr>
  <tr>
   <td>time_to_order
   </td>
   <td>??
   </td>
  </tr>
  <tr>
   <td>total_matches
   </td>
   <td>total number of matches with buyers
   </td>
  </tr>
  <tr>
   <td>completed_matches
   </td>
   <td>completed matches with buyers
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> a simple user id of the user,this is the foreign key.
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### Rating comments

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>match_id

   </td>
   <td>matchid is  a matching  between seller and and buyer , this is primary key.
   </td>
  </tr>
  <tr>
   <td>comment
   </td>
   <td> message about deal from the user 
   </td>
  </tr>
  <tr>
   <td>rating
   </td>
   <td> Actual rating of the deal.

   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>A simple user id, this is foreign key.
   </td>
  </table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### User submitted offers

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td> a simple id number, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>offer_link
   </td>
   <td> buying order offer link
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>A simple user id, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>card_name
   </td>
   <td>name of the card  ex.master,vesa
   </td>
  </table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Mark  out of stock

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td>buyer order id,this is the primary key.
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> A simple user id, this is the foreign key.
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  </table>

  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Match rating log

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>match_id
   </td>
   <td>matchid is  a matching  between seller and and buyer , this is primary key.
   </td>
  </tr>
  <tr>
   <td>buyer_got
   </td>
   <td> after completion of the order buyer status.
   </td>
  </tr>
  <tr>
   <td>seller_got
   </td>
   <td>after completion of the order seller status
   </td>
  </tr>
  <tr>
   <td>buyer_uid
   </td>
   <td>buyer user id number, this is the foreign key.
   </td>
  </tr>
  <tr>
   <td>seller_uid
   </td>
   <td>seller user id number,this is the foreign key.
   </td>
  </tr>
  </table>
  
  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Match req

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>match_id
   </td>
   <td>matchid is  a matching  between seller and and buyer , this is primary key.
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td> buyer order id number
   </td>
  </tr>
  <tr>
   <td>s_order_id
   </td>
   <td> seller order id number
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>present order status
   </td>
  </tr>
  <tr>
   <td>buyer_uid
   </td>
   <td>buyer user id, this is a foreign key. 
   </td>
  </tr>
  <tr>
   <td>seller_uid
   </td>
   <td> seller user id, this is foreign key.
   </td>
  </tr>
  <tr>
   <td>amount
   </td>
   <td>total amount to pay for the product
   </td>
  </tr>
  <tr>
   <td>tip_offered
   </td>
   <td>tip offered to the seller 
   </td>
  </tr>
  <tr>
   <td>website_order_id
   </td>
   <td> product buying website order id number 
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>product_link
   </td>
   <td>buying product link 
   </td>
  </tr>
  <tr>
   <td>offer_details
   </td>
   <td> cashback and discount of order details
   </td>
  </tr>
  <tr>
   <td>delivery_date
   </td>
   <td> product delivery date 
   </td>
  </tr>
  <tr>
   <td>site_host_name
   </td>
   <td>buying product site name
   </td>
  </tr>
  <tr>
   <td>extend_req_cnt
   </td>
   <td>??
   </td>
  </tr>
  <tr>
   <td>card_holder_placed
   </td>
   <td>??
   </td>
  </tr>
  <tr>
   <td>initiater
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>order_placed_ts
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>deal_id
   </td>
   <td>order deal id number
   </td>
  </tr>
  <tr>
   <td>cashback_to
   </td>
   <td>cashback to seller 
   </td>
  </tr>
  <tr>
   <td>card_id
   </td>
   <td>card id number
   </td>
  </tr>
  <tr>
   <td>will_place_order
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>match_time
   </td>
   <td>match time between seller and buyer.
   </td>
  </tr>
  <tr>
   <td>quantity
   </td>
   <td>number of products
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>
   </td>
  </tr>
  </table>
  
  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Hypto upi deposit

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td> id number , this is the primary key
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> A simple user id
   </td>
  </tr>
  <tr>
   <td>amt
   </td>
   <td>amount to deposit 
   </td>
  </tr>
  <tr>
   <td>upi_id
   </td>
   <td>unified payment id  
   </td>
  </tr>
  <tr>
   <td>order_id
   </td>
   <td>amount
   </td>
  </tr>
  <tr>
   <td>expiry
   </td>
   <td> This field denote expire of the deal
   </td>
  </tr>
  <tr>
   <td>upi_status
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>bank
   </td>
   <td>depositing bank name 
   </td>
  </tr>
  <tr>
   <td>reference_number
   </td>
   <td> transaction reference number
   </td>
  </tr>
  </table>

  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### Gv Remaining  Buy Quantities

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>match_id
   </td>
   <td>matchid is  a matching  between seller and and buyer , this is primary key.
   </td>
  </tr>
  <tr>
   <td>b_order_id
   </td>
   <td>buyer order id number,this is foreign key .
   </td>
  </tr>
  <tr>
   <td>quantity
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>buy_status
   </td>
   <td>
   </td>
  </tr>
  </table>


  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### Transaction log

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>log_id
   </td>
   <td>user log id number , this is the primary key.
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> a simple user id 
   </td>
  </tr>
  <tr>
   <td>inr
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>sum_inr
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>reference
   </td>
   <td>reference number
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>-1 cancelled ,0 just matched ,1 user added money.
   </td>
  </tr>
  <tr>
   <td>NWI
   </td>
   <td>Non withdrawal inr
   </td>
  </tr>
  <tr>
   <td>sum
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>sum_NWI
   </td>
   <td>total sum of non withdrawl inr
   </td>
  </tr>
  <tr>
   <td>status_new
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>is_test
   </td>
   <td>
   </td>
  </tr>
  </table>


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### Status change logs

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>entry_id
   </td>
   <td>unique id for each entry , this is the primary key.
   </td>
  </tr>
  <tr>
   <td>match_id
   </td>
   <td> matchid is  a matching  between seller and and buyer , this is primary key.
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>present condition 
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  </table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Recharge rating logs


<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>match_id
   </td>
   <td>matchid is a matching between seller and and buyer , this is primary key.
   </td>
  </tr>
  <tr>
   <td>buyer_got
   </td>
   <td>after completion of the order buyer status
   </td>
  </tr>
  <tr>
   <td>seller_got
   </td>
   <td>after completion of the order seller status
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>
<!-- ***** Recharge rating logs table completed ****** -->

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Referral logs

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>entry_id
   </td>
   <td>unique id for each entry, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  <tr>
   <td>referance
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>A simple user id
   </td>
  </tr>
  <tr>
   <td>user_name
   </td>
   <td>name of the user
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>need more information!!
   </td>
  </tr>
  <tr>
   <td>amt
   </td>
   <td>referral amount
   </td>
  </tr>
  </table>


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### Umc stats

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td> A simple user id, this is the primary key.
   </td>
  </tr>
  <tr>
   <td>tot_savings
   </td>
   <td> total savings on products
   </td>
  </tr>
  <tr>
   <td>tot_earnings
   </td>
   <td>total earnigs from the users
   </td>
  </tr>
  <tr>
   <td>last7orders
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>incomp_ratings
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>completed_buys
   </td>
   <td>completed buying items
   </td>
  </tr>
  <tr>
   <td>completed_sells
   </td>
   <td>completed sellings
   </td>
  </tr>
  </table>

  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### p2p feedback

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>feedback_id
   </td>
   <td>feedback id number
   </td>
  </tr>
  <tr>
   <td>feedback
   </td>
   <td> this field tell about feedback of the user about deal.
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>This is the simeple user id number.
   </td>
  </tr>
  <tr>
   <td>email
   </td>
   <td>email of the user 
   </td>
  </tr>
  <tr>
   <td>browser
   </td>
   <td>using browser (chrome , firefox)
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  </table>


**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### Deals suggested updates
  

<table>
  <tr>
   <td><strong> Field Name
   </td>
   <td><strong> Description
   </td>
  </tr>
  <tr>
   <td>deal_id
   </td>
   <td> Deal id number , this is the primary number.
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>A simple user id, this is the  foreign key.
   </td>
  </tr>
  <tr>
   <td>end_time
   </td>
   <td>need to more information !!
   </td>
  </tr>
  <tr>
   <td>category_id
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>day
   </td>
   <td>date of the deal
   </td>
  </tr>
  <tr>
   <td>offer_link
   </td>
   <td>buying product offer link 
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>-1 cancelled, 0 just matched 
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td>timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
</table>

**[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Registration source

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>a simple user id , this is the primary key.
   </td>
  </tr>
  <tr>
   <td>utm_source
   </td>
   <td> UTM source tracking of the url where the user come from 
   </td>
  </tr>
  <tr>
   <td>utm_medium
   </td>
   <td> UTM medium  ex.youtube,cpc(cost per click)    
   </td>
  </tr>
  <tr>
   <td>utm_campaign
   </td>
   <td>campaign for the promotional product lunches . 
   </td>
  </table>

  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Flip PID table

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>user_id
   </td>
   <td>A simple user id ,this is the primary key.
   </td>
  </tr>
  <tr>
   <td>utm_source
   </td>
   <td>UTM source tracking of the url where the user come from 
   </td>
  </tr>
  <tr>
   <td>utm_medium
   </td>
   <td>UTM medium  ex.youtube,cpc(cost per click)
   </td>
  </tr>
  <tr>
   <td>utm_campaign
   </td>
   <td>campaign for the promotional product lunches .
   </td>
  </table>

  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**

#### Sms feedback

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td> simple id number , this is the  primary key.
   </td>
  </tr>
  <tr>
   <td>feedback
   </td>
   <td> this field tell about feedback of the user about deal 
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  </table>

  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**
#### Sms alert emails

<table>
  <tr>
   <td><strong>Field Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>id
   </td>
   <td>a simple id number ,this is primary key.
   </td>
  </tr>
  <tr>
   <td>email
   </td>
   <td> email of the user
   </td>
  </tr>
  <tr>
   <td>timestamp
   </td>
   <td> timestamp keeping the records of when information is being exchanged or created
   </td>
  </tr>
  </table>


  **[⬆ Back to Top](#details-of-fields-of-schema-of-umc)**