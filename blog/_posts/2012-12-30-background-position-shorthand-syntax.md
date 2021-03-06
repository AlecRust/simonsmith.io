---
title: 'Background Position: Shorthand Syntax'
author: Simon
layout: post
permalink: /background-position-shorthand-syntax/
type: post
---
Whilst it&#8217;s easy to be swept up in the flashy world of animations and transitions, CSS3 also offers more subtle improvements to other parts of the specification. One of those is the background-position property, which now allows greater control over the offsets of an image.

Considering the flexibility [that the position property][1] affords us, it would make sense that the same rules apply to the `background-position` property. Sadly, this is not so.

## Top left

Most developers will be familiar with setting the offsets of their background images from the *top left* of an element:

<figure class="Figure Figure--vSpaceLrg">
    <img class="Figure-img" src="/assets/images/uploads/2012/08/bgp-100-50-300x216.png">
</figure>

{% highlight css %}
background-position: 100% 50%;
{% endhighlight %}

<figure class="Figure Figure--vSpaceLrg">
    <img class="Figure-img" src="/assets/images/uploads/2012/08/bgp-10px-10px-300x216.jpg">
</figure>

{% highlight css %}
background-position: 10px 10px;
{% endhighlight %}

## Limitations

But what happens when the design requires the image to remain 20px from the right side and 20px from the bottom? Not so simple when our positions are relative to the top left.

One approach requires upfront knowledge of the image dimensions and those of the element to which it is being applied:

<figure class="Figure Figure--vSpaceLrg">
    <img class="Figure-img" src="/assets/images/uploads/2012/08/bgp-right-20px-bottom-20px-300x216.jpg">
</figure>

{% highlight css %}
/*
230px = (350px - 100px) - 20px
130px = (250px - 100px) - 20px
*/
background-position: 230px 130px;
{% endhighlight %}

This is a fairly hideous solution and makes assumptions that our element and image will never change width. And it requires me to do maths, which I never enjoy.

In today&#8217;s responsive world, this simply won&#8217;t fly. So what about percentage measurements? Again this requires more maths and more importantly, the spacing will vary on flexible elements:

<figure class="Figure Figure--vSpaceLrg">
    <img class="Figure-img" src="/assets/images/uploads/2012/08/flexible-fail.jpg">
</figure>

{% highlight css %}
background-position: 94% 87%;
{% endhighlight %}

## Out with the old, in with the four

The solution is also deliciously simple:

{% highlight css %}
background-position: right 20px bottom 20px;
{% endhighlight %}

Different values can be mixed, just as before:

{% highlight css %}
background-position: right 1em bottom 50px;
{% endhighlight %}

{% highlight css %}
background-position: right 40% bottom 2em;
{% endhighlight %}

Additionally three values can be used, providing the third is a keyword value:

{% highlight css %}
background-position: right 1em center;
{% endhighlight %}

## Browser support

As you could have guessed, support for this syntax is a *bit* spotty.

Currently, you&#8217;ll find it in:

*   Firefox 13+
*   Chrome 25+
*   Opera 10.5+
*   Internet Explorer 9.0+
*   Safari Nightly

However, don&#8217;t let this stop you using it now! If you make use of [Modernizr][2] in your projects then [there is a feature detect][3] that can be easily dropped in.

One example is to simply provide a percentage-based fallback:

{% highlight css %}
.element {
    background-position: right 1em center;
}

.no-bgpositionshorthand .element {
    background-position: 97% center;
}
{% endhighlight %}

If you feel like moving the kitten background around yourself, then there is [a demo available on jsfiddle][4].

## That&#8217;s it

A simple addition, I&#8217;m sure you&#8217;ll agree. But I&#8217;ve already found uses for it responsive layouts and hope you do too!

## Further reading

*   [Background position on the Mozilla Developer Network][5] - Includes a browser support table
*   [CSS3 background position specification][6]

 [1]: https://developer.mozilla.org/en/CSS/position
 [2]: http://modernizr.com/
 [3]: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css-backgroundposition-shorthand.js
 [4]: http://jsfiddle.net/Blink/jeYUK/
 [5]: https://developer.mozilla.org/en/CSS/background-position
 [6]: http://www.w3.org/TR/css3-background/#background-position
