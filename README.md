# Buka App

The Buka App should allow owners of bars to serve a better experience for their clients. This is achieved by creating an application where owners can register drinks, that are composed of spirits (anything that has alcohol and goes inside a drink) and ingredients (anything that does not have alcohol). The owner should also be able to register their clients, open a bill for a client and add drinks that were consumed during the customer's drinking session to the bill. When the bill is closed, a value is generated based on every drink that was consumed. Drinks' values are also composed of the unit value of each spirit/ingredient that goes into its recipee. Owners should be able to add a description - How-To - to drinks, and VIP customers will be able to see all their past bills + consumed drinks and how-tos.

## Functional Requirements

[ ] - Owners should be created through an Admin account<br />
[ ] - Owners should be able to login using username/password<br />
[ ] - Owners should be able to create spirits/ingredients<br />
[ ] - Owners should be able to edit spirits/ingredients<br />
[ ] - Owners should be able to hard-delete unused spirits/ingredients<br />
[ ] - Owners should be able to soft-delete used spirits/ingredients<br />
[ ] - Owners should be able to view a list of spirits/ingredients<br />
[ ] - Owners should be able to create a drink<br />
[ ] - Owners should be able to edit a drink<br />
[ ] - Owners should be able to hard-delete unused drinks<br />
[ ] - Owners should be able to soft-delete used drinks<br />
[ ] - Owners should be able to view a list of created drinks<br />
[ ] - Owners should be able to configure a profit margin (a percentage that he wishes to put on top of the costs for his drinks)<br />
[ ] - Owners should be able to override the above configuration for specific drinks<br />
[ ] - Owners should be able to register a client<br />
[ ] - Owners should be able to edit a client<br />
[ ] - Owners should be able to hard-delete unused clients<br />
[ ] - Owners should be able to soft-delete used clients<br />
[ ] - Owners should be able to view a list of clients<br />
[ ] - Owners should be able to see details of a specific client<br />
[ ] - Owners should be able to open a bill for a client<br />
[ ] - Owners should be able to hard-delete an open bill<br />
[ ] - Owners should be able to add/remove drinks to an open bill<br />
[ ] - Owners should be able to close a bill<br />
[ ] - Owners should be able to mark a closed bill as PAID<br />
[ ] - Owners should be able to upgrade a client to VIP<br />
[ ] - A VIP client should be able to login with an email/automatic password<br />
[ ] - A VIP client should be able to change their password<br />
[ ] - A VIP client should be able to view a list of past bills<br />
[ ] - A VIP client should be able to view the currently open bill<br />
[ ] - A VIP client should be able to view drinks and their spirits/ingredients, and How-Tos of both past bills / open bills<br />
[ ] - Owners should be able to upload csv/xsl/xlsx files with clients/spirits/ingredients to create entries in batch<br />
[ ] - Owners should be able to see the most frequent client (more bills in a specific timeframe)<br />
[ ] - Owners should be able to see the client who has spent the most (total sum of bill values in a specific timeframe)<br />
[ ] - Owners should be able to see the drink that sells more often<br />
[ ] - Owners should be able to see the most and least profitable drink<br />

## Business Rules

[ ] - Owners should have a username and a password<br />
[ ] - Owners can't have the same username<br />
[ ] - Spirits should have a name, amount (in ML/OZ/G), cost and an optional description<br />
[ ] - Ingredients should have a name, amount (in ML/OZ/G), cost and an optional description<br />
[ ] - Drinks are composed of spirits and ingredients. They should have a name, a description, a cost (sum of all spirits/ingredients), a selling price (cost \* global or overriden profit margin), an optional profit margin that overrides the global one, an optional picture and how-to<br />
[ ] - Clients should have a name, sex, email and phone number<br />
[ ] - When soft-deleting a spirit/ingredient, all drinks that consume them should also be soft-deleted<br />
[ ] - VIP clients should receive an email when they are first upgraded, with a random password<br />
[ ] - VIP clients should change their password on their first login<br />
