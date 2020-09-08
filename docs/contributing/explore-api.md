---
id: explore-api
title: Explore the API
---

To find the right way to start and creating new cmdlets is not easy when you start. But there are basically two approaches you might want to use.

## Use Postman

To access the REST API, you are going to need a Personal Access Token (PAT). You can learn how to create a PAT from the [Authenticating with personal access tokens](http://cda.ms/4k) topic of [docs.microsoft.com](http://cda.ms/4k). Once you have a PAT start [Postman](https://www.getpostman.com). If you do not have Postman you can download it from getPostman.com.

I normally begin with Get-xxx function of any API. For the purpose of this document I am going to use the [User Entitlements API](http://cda.ms/4m). This function will combine the Get and List APIs.  I will begin with List. Using the sample request enter the data into Postman.

```http
GET 'https://vsaex.dev.azure.com/{organization}/_apis/userentitlements?top={top}&skip={skip}&api-version=5.1-preview.2'
```

Replace `{organization}` with just the portion of your Azure DevOps (AzD) URL after "https://dev.azure.com" For `{top}` I am going to enter 100 and for `{skip}` 0. Postman should look similar to the image below.

![Postman Get Request](/docs/contributing/images/contributing_postmanGet.png)

Now before we press Send we have to enter our PAT. Select "Basic Auth" for Type under Authorization. You can leave the Username empty. For your Password copy and paste in your PAT.

![Postman Auth](/docs/contributing/images/contributing_postmanAuth.png)

Now you can press Send. Postman will issue the request and display the results at the bottom of the user interface.

![Postman Auth](/docs/contributing/images/contributing_postmanResponse.png)

This confirms that we know how to build a complete request to the service. This is an opportunity to explore all the parameters of the API and make sure you know what to expect.

## Use Invoke-VSTeamRequest