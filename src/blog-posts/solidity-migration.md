---
title: Solidity Major Changes
date: '2022-11-18'
featured: true
---
In recent versions of Solidity there have been a number of breaking changes that affect probably all contracts in one way or another. I decided that it might be helpful to other developers if I listed some of the more general ones that are going to come up no matter what you're building, especially if you're using an older tutorial or course that is based on a previous version of Solidity. I won't be trying to cover every single breaking change for every edge case. Those can always be found [here](https://docs.soliditylang.org/en/v0.8.17/080-breaking-changes.html)

## SPDX License Indentifiers ##

The first change that I want to mention is not actually a breaking change, but it will cause the compiler to throw a warning. Beginning with version 0.6.8 the compiler will encourage you to include an SPDX license identifier at the top of your source code file. This allows you to explicitly state whether or not the code is open source which is important for copyright reasons whenever you are making your source code publicly available.

<figure>
<pre><span>// SPDX-License-Identifier: MIT</span></pre>
<figcaption>Example of an SPDX license identifier on the first line of a source code file</figcaption>
</figure>

[Source](https://docs.soliditylang.org/en/v0.8.17/layout-of-source-files.html?highlight=spdx#spdx-license-identifier)

## Constructor Keyword ##

Beginning with version 0.5.0 you will no longer name your constructor function with a capitalized version of the contract name, as a new constructor keyword has been added to the language. The constructor function is the optional function that will be called upon contract creation. This is a breaking change so if you want to use newer versions of Solidity, make sure that you update your code accordingly.

<figure>
<pre>
<span>contract MyContract {
...
function MyContract(string someInitialValue) public {</span>
</pre>
<figcaption>Constructor function prior to version 0.5.0</figcaption>
</figure>

Becomes...

<figure>
<pre>
<span>contract MyContract {
...
constructor(string someInitialValue) public {</span>
</pre>
<figcaption>Constructor function beginning with version 0.5.0</figcaption>
</figure>

Also worth noting is that with version 0.7.0 you are no longer required to mark a constructor function as public. The previous example can be further updated as such:

<figure>
<pre>
<span>contract MyContract {
...
constructor(string someInitialValue) {</span>
</pre>
<figcaption>Constructor function beginning with version 0.7.0</figcaption>
</figure>

[Source: Constructor keyword](https://docs.soliditylang.org/en/v0.8.17/050-breaking-changes.html#constructors)

[Source: Public no longer needed](https://docs.soliditylang.org/en/v0.8.17/070-breaking-changes.html#functions-and-events)

## Address Payable ##

Starting with version 0.5.0 the address data type has been split into address and address payable. Only the address payable type can use the transfer function. The address payable type can be directly converted into an address type but not vice versa.

<figure>
<pre>
<span>address recipient = recipientAddress;
payable(recipient).transfer(value);</span>
</pre>
<figcaption>Example of how to directly convert an address into an address payable type</figcaption>
</figure>

<figure>
<pre>
<span>address payable[] public recipients;</span>
</pre>
<figcaption>Example of how to instantiate an array where each of its items are of the address payable type</figcaption>
</figure>

[Source](https://docs.soliditylang.org/en/v0.8.17/050-breaking-changes.html#explicitness-requirements)

## Explicit Data Locations ##

Since the release of version 0.5.0 the data location for all struct, array or mapping type variables must be explicitly declared. This includes function parameters and return types.

<figure>
<pre>
<span>function getAllRecipients() public view returns (address payable[]) {</span>
</pre>
<figcaption>Return type declaration prior to verion 0.5.0</figcaption>
</figure>

Becomes ...

<figure>
<pre>
<span>function getAllRecipients() public view returns (address payable[] memory) {</span>
</pre>
<figcaption>Return type declaration beginning with verion 0.5.0</figcaption>
</figure>

[Source](https://docs.soliditylang.org/en/v0.8.17/050-breaking-changes.html#explicitness-requirements)

## Mappings Can Only Be Used In Storage ##

Beginning with version 0.7.0 if an array or struct contains a mapping it can only be used in storage. Previously this code would be valid:

<figure>
<pre>
<span>Request memory newRequest = Request({
    key: value,
    ...
});
requests.push(newRequest);</span>
</pre>
<figcaption>Adding a mapping to a storage array prior to version 0.7.0</figcaption>
</figure>

But in order to use version 0.7.0 or later it must be written like this:

<figure>
<pre>
<span>Request storage newRequest = requests.push();
newRequest.key = value;
...</span>
</pre>
<figcaption>Adding a mapping to a storage array beginning with version 0.7.0</figcaption>
</figure>

In the updated example we are pushing a new Request mapping into the array in storage and then changing the values associated with each of its keys. This is in contrast to creating a new Request mapping in memory and then pushing it to the array in storage.

[Source](https://docs.soliditylang.org/en/v0.8.17/070-breaking-changes.html#mappings-outside-storage)

## Shape of a Compiled Contract ##

When it comes to deploying a compiled smart contract onto the blockchain, there are two important pieces of data which need to be pulled off of the compiled contract. Over the years the shape of the compiled contract has changed, and the location within the JSON structure where the interface (ABI) and bytecode can be found has changed as well. Originally you would pull the interface and bytecode objects from the top level of the compiled contract JSON. This is still true for the interface, however the key has been renamed to abi. The bytecode can now be found under evm.bytecode.object.

If you are trying to deploy a contract and you are getting errors about not being able to find the interface and bytecode, then you may need to update your code to look like this:

<figure>
<pre>
<span>await new web3.eth.Contract(compiledContract.abi)
    .deploy({ data: compiledContract.evm.bytecode.object })
    .send({ gas: '1000000', from: myAccount })</span>
</pre>
<figcaption>Example of finding the interface (abi) and bytecode of a compiled contract</figcaption>
</figure>