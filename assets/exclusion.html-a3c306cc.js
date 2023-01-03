import{ab as o,G as i,H as c,F as e,U as a,N as n,ac as t,X as l}from"./framework-b3e398e9.js";const r={},p=t(`<h1 id="writing-exclusions-skidfuscator-2-0-0" tabindex="-1"><a class="header-anchor" href="#writing-exclusions-skidfuscator-2-0-0" aria-hidden="true">#</a> Writing Exclusions (Skidfuscator &gt;= 2.0.0)</h1><p>Understanding exclusions might be tricky at first, but trust me, it is quite easy once you get the hang of it. First and foremost, it&#39;s important to understand basic regex.</p><h2 id="basics-of-regex-regular-expressions" tabindex="-1"><a class="header-anchor" href="#basics-of-regex-regular-expressions" aria-hidden="true">#</a> Basics of Regex (Regular expressions)</h2><ul><li>Here&#39;s a basic string to match everything:</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">(</span><span class="token punctuation">.</span>*<span class="token operator">?</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>So the following would happen:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>abozeofez <span class="token comment">// Matches!</span>
zeigzoegze <span class="token comment">// Matches!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>To match any string which contains &quot;roar&quot;, you&#39;d have</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>roar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>So the following would happen:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>roar <span class="token comment">// Matches!</span>
asdafroar <span class="token comment">// Matches!</span>
grrr <span class="token comment">// No match!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>To match any string which begins <em>with</em> &quot;uwu&quot;, you&#39;d have:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">^</span>uwu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>So the following would happen:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>kitty<span class="token operator">-</span>uwu <span class="token comment">// Matches!</span>
uwu<span class="token operator">-</span>kitty <span class="token comment">// No match!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,18),u={href:"https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="writing-exclusions" tabindex="-1"><a class="header-anchor" href="#writing-exclusions" aria-hidden="true">#</a> Writing exclusions</h2><p>Now, you&#39;ll want to create an exclusion file, and here you&#39;ll be able to mess around. Skidfuscator reads inclusions and exclusions the same way: if it matches a regex pattern, <strong><strong>it will not be read or obfuscated</strong></strong>.</p><h3 id="exclusions" tabindex="-1"><a class="header-anchor" href="#exclusions" aria-hidden="true">#</a> Exclusions</h3><p>Writing an exclusion is relatively simple. By using regex forward matching as seen below, you are able to match any type of class. Remember to escape any &quot;/&quot; with a &quot;\\&quot; to prevent Regex from comitting seppuku and you spending hours figuring out what&#39;s wrong.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// This will match any method with the name &quot;main&quot;</span>
method<span class="token punctuation">{</span>main<span class="token punctuation">}</span> 
<span class="token comment">// This will match any method which starts with &quot;com.apache&quot; </span>
<span class="token comment">// (any class name replaces the &quot;.&quot; with &quot;/&quot;</span>
<span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span>com\\<span class="token operator">/</span>apache<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="multiple-exclusions" tabindex="-1"><a class="header-anchor" href="#multiple-exclusions" aria-hidden="true">#</a> Multiple exclusions</h4><p>To be able to exclude for example several methods, or packages, it&#39;s quite simple really! All you have to do is create a new line and add the new exemption 😃</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span>com\\<span class="token operator">/</span>apache<span class="token punctuation">}</span> <span class="token comment">// Matches apache</span>
<span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span>com\\<span class="token operator">/</span>google<span class="token punctuation">}</span> <span class="token comment">// Matches google</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inclusions" tabindex="-1"><a class="header-anchor" href="#inclusions" aria-hidden="true">#</a> Inclusions</h3><p>As opposed to exclusions, you may want to <strong>only include a particular set of classes or a package</strong> in your obfuscated jar. Fret not, this is possible, albeit a little more complicated.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// This will match all classes of the package &quot;com.example&quot;</span>
<span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">!</span><span class="token punctuation">(</span>com\\<span class="token operator">/</span>example<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>*$<span class="token punctuation">}</span> 

<span class="token comment">// This will match all classes of the package &quot;com.example&quot; and </span>
<span class="token comment">// all of the classes of the package &quot;com.eclipse&quot;. </span>
<span class="token comment">// You may add as many packages as you wish with the &quot;|&quot; argument.</span>
<span class="token keyword">class</span><span class="token punctuation">{</span><span class="token operator">^</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">!</span><span class="token punctuation">(</span>com\\<span class="token operator">/</span>example<span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">(</span>com\\<span class="token operator">/</span>eclipse<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>*$<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debugging-exclusions" tabindex="-1"><a class="header-anchor" href="#debugging-exclusions" aria-hidden="true">#</a> Debugging Exclusions</h2>`,12),m={href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,'All class names, by default, follow the format "package1/package2/class1". Whilst you may see in the JVM it is formatted differently, in the case of Skidfuscator, the above format was decided to be the most effective and reflective of Jar/Zip file hierarchy.',-1);function v(g,k){const s=l("ExternalLinkIcon");return i(),c("div",null,[p,e("p",null,[a("If you'd like to read more about Regex, find out here: "),e("a",u,[a("Regex tutorial"),n(s)])]),d,e("p",null,[a("I strongly recommend using a regex debugger, such as "),e("a",m,[a("Regex101"),n(s)]),a(", to be able to figure out what matches and what does not.")]),h])}const x=o(r,[["render",v],["__file","exclusion.html.vue"]]);export{x as default};
