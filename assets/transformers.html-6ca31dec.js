import{ab as l,G as e,H as m,F as s,U as a,N as i,ac as t,X as r}from"./framework-b3e398e9.js";const c={},p=s("h1",{id:"transformers",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#transformers","aria-hidden":"true"},"#"),a(" Transformers")],-1),o=s("p",null,"Here's the index where I'll be detailing every transformer one by one. This should help you grasp a bit what's happening behind the scenes and how such transformations are effective against reverse engineering.",-1),h=s("p",null,"We'll be going over the following index:",-1),u=s("ul",null,[s("li",null,"Number Obfuscation"),s("li",null,"String Encryption")],-1),d=s("h2",{id:"number-obfuscation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#number-obfuscation","aria-hidden":"true"},"#"),a(" Number Obfuscation")],-1),g=s("p",null,"Lets assume the following scenario:",-1),y=s("ul",null,[s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a(" is the number we wish to encrypt")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(' is the "seed" of the block')]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d")]),s("annotation",{encoding:"application/x-tex"},"d")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"d")])])]),a(" is the encryped number")])],-1),x=s("p",null,[a("According to simple xor mechanics: "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"⊕"),s("mi",null,"n"),s("mo",null,"⊕"),s("mi",null,"n"),s("mo",null,"="),s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x\\oplus n\\oplus n=x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])])],-1),b=s("p",null,[a("So, by definition, if "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" is our seed, at runtime we must compute "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d")]),s("annotation",{encoding:"application/x-tex"},"d")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"d")])])]),a(" such as "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d"),s("mo",null,"="),s("mi",null,"x"),s("mo",null,"⊕"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"d = x\\oplus n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(". Then, we must modify the bytecode instruction such as:")],-1),v=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> value <span class="token operator">=</span> x<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>becomes</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> value <span class="token operator">=</span> d <span class="token operator">^</span> n<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),w=s("p",null,[a("Where "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"d")]),s("annotation",{encoding:"application/x-tex"},"d")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"d")])])]),a(" is the value computed ahead of time in the form of a constant and "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" the opaque predicate. Eg:")],-1),f=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>becomes</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> predicate <span class="token operator">=</span> <span class="token number">0x100</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">105</span> <span class="token operator">^</span> predicate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-encryption" tabindex="-1"><a class="header-anchor" href="#string-encryption" aria-hidden="true">#</a> String Encryption</h2><p>String encryption relies on three basic conditions before being able to be processed:</p><ol><li>The string constant must be available in the constant pool</li><li>The string constant must be formatted under UTF-8</li><li>The string must not be empty</li></ol><p>With the such, we are able to inject a symmetric encryption system inside the code to be able to obscure the string from typical decompiler/dissassemblers.</p><h3 id="xor-algorithm" tabindex="-1"><a class="header-anchor" href="#xor-algorithm" aria-hidden="true">#</a> Xor Algorithm</h3><p>As of right now, we use a simple xor algorithm which is quite resilient to be able to compute our encrypted string. Whilst this algorithm is mathematically of the poorest quality, and could be cracked most likely in polynomial time if not linear time, our objective here is to propose an easy and proof-of-concept implementation of how an opaque predicate can harden string encryption. In future versions of Skidfuscator, we will make use of a polymorphic engine.</p><p>The algorithm currently functions this way:</p>`,10),k=s("p",null,[a("Let "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"f"),s("mi",null,"y")]),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"x"),s("mo",null,"⊕"),s("mi",null,"y"),s("mo",null,"⊕"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"f_y(x)=x\\oplus y\\oplus n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0361em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" represent the encryption and decryption method for a character in a String for a given "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" and "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"m"),s("mrow",null,[s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x")])])]),s("annotation",{encoding:"application/x-tex"},"m_{max}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"ma"),s("span",{class:"mord mathnormal mtight"},"x")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(" of 255")],-1),M=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"i"),s("mspace"),s("mspace",{width:"0.6667em"}),s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"o"),s("mi",{mathvariant:"normal"},"d")]),s("mtext",null," "),s("mtext",null," "),s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"y=i\\mod m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace allowbreak"}),s("span",{class:"mspace",style:{"margin-right":"0.6667em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"mod")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"m")])])])],-1),_=s("p",null,[a("where "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" represents the index of the character in the String, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(' represents the size of the random integer array with random "keys", '),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" represents the integer opaque predicate, "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a(" the character at the index "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" of the String.")],-1),L=s("p",null,"By definition:",-1),z=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("msub",null,[s("mi",null,"f"),s("mi",null,"y")]),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"f"),s("mi",null,"y")]),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mi",null,"x"),s("mo",null,"⊕"),s("mi",null,"y"),s("mo",null,"⊕"),s("mi",null,"n"),s("mo",null,"⊕"),s("mi",null,"y"),s("mo",null,"⊕"),s("mi",null,"n")])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})]),s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mi",null,"x"),s("mo",null,"⊕"),s("mi",null,"y"),s("mo",null,"⊕"),s("mi",null,"y"),s("mo",null,"⊕"),s("mi",null,"n"),s("mo",null,"⊕"),s("mi",null,"n")])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})]),s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("msub",null,[s("mi",null,"f"),s("mi",null,"y")]),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"f"),s("mi",null,"y")]),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mi",null,"x")])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})])]),s("annotation",{encoding:"application/x-tex"}," \\begin{align} f_y(f_y(x))&=x\\oplus y\\oplus n\\oplus y\\oplus n\\\\ &=x\\oplus y\\oplus y\\oplus n\\oplus n\\\\ f_y(f_y(x))&=x \\end{align} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"4.5em","vertical-align":"-2em"}}),s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5em"}},[s("span",{style:{top:"-4.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},"))")])]),s("span",{style:{top:"-3.16em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"})]),s("span",{style:{top:"-1.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},"))")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2em"}},[s("span")])])])]),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5em"}},[s("span",{style:{top:"-4.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-3.16em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⊕"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-1.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2em"}},[s("span")])])])])])]),s("span",{class:"tag"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5em"}},[s("span",{style:{top:"-4.5em"}},[s("span",{class:"pstrut",style:{height:"2.84em"}}),s("span",{class:"eqn-num"})]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"2.84em"}}),s("span",{class:"eqn-num"})]),s("span",{style:{top:"-1.5em"}},[s("span",{class:"pstrut",style:{height:"2.84em"}}),s("span",{class:"eqn-num"})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2em"}},[s("span")])])])])])])])],-1),j={href:"https://github.com/terminalsin/skidfuscator-java-obfuscator/blob/master/dev.skidfuscator.obfuscator/obfuscator/src/main/java/dev/skidfuscator/obfuscator/transform/impl/string/BasicEncryptionGenerator.java",target:"_blank",rel:"noopener noreferrer"},q=t('<p>Outlining refers to the process of extracting code from a method and placing it into a separate, standalone method. This is often done as a way to improve the readability and maintainability of code, as it can make it easier to understand what a method is doing by breaking it down into smaller, more focused pieces of code.</p><p>Outlining can also be used as a form of code obfuscation, as it can make it more difficult for someone attempting to reverse engineer or understand the code to see the overall flow and structure of the program. By breaking the code into smaller pieces and separating it out into different methods, it can be a much harsher procedure for someone to understand the relationships between different parts of the flow and how they fit together to perform a particular function.</p><figure><img src="https://i.imgur.com/2HMq0a4.png" alt="Outlining graph explanation" tabindex="0" loading="lazy"><figcaption>Outlining graph explanation</figcaption></figure><p>The fantastic thing about outlining is: it&#39;s not <em>technically</em> reversible! To be able to return to an original state of a good outline obfuscation, a deobfuscator <em>has to do inlining</em>, which is a heuristic and <em>doesn&#39;t</em> guarantee the output to always be semantically correct with the original source code. Furthermore, this necessites the deobfuscator to mangle with variables and other various forms of sensitive bytecode manipulation which all can lead to frame and computation exceptions.</p><p>Overall, outlining obfuscation is pretty neat 😃</p>',5);function T(S,E){const n=r("ExternalLinkIcon");return e(),m("div",null,[p,o,h,u,d,g,y,x,b,v,w,f,k,M,_,L,z,s("p",null,[a("Hence we obtain a usable encryption/decryption algorithm which is hardened by an opaque predicate and a suite of integer keys stored locally. The implementation may be seen "),s("a",j,[a("here"),i(n)])]),q])}const O=l(c,[["render",T],["__file","transformers.html.vue"]]);export{O as default};
