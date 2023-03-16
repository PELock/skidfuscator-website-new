import{_ as n,W as a,X as s,a0 as e}from"./framework-a6fc1c2a.js";const t={},p=e(`<h2 id="exception-return" tabindex="-1"><a class="header-anchor" href="#exception-return" aria-hidden="true">#</a> Exception Return</h2><p>Exception return obfuscation is a programming technique used to make the control flow of a program more difficult to understand and analyze by obfuscating return results and standardizing every method to have a void return value.</p><p>In a nutshell, this technique replaces normal return statements with exception handling blocks that make the program&#39;s control flow less predictable. When an exception is raised, the program jumps to a designated exception handler, which then returns the desired value or performs the intended action. This makes the code harder to read, analyze, and reverse engineer, thus providing a level of protection against tampering or piracy.</p><p>&#39;&#39;&#39;warning This obfuscation technique is still experimental and may not successfully compile on larger programs. For this very reason, it is disabled by default. &#39;&#39;&#39;</p><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>exceptionReturn <span class="token punctuation">{</span>
    <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token literal-property property">exempt</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="behind-the-scenes" tabindex="-1"><a class="header-anchor" href="#behind-the-scenes" aria-hidden="true">#</a> Behind-the-scenes</h2><h3 id="unobfuscated" tabindex="-1"><a class="header-anchor" href="#unobfuscated" aria-hidden="true">#</a> Unobfuscated</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token function">callNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">callNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="obfuscated" tabindex="-1"><a class="header-anchor" href="#obfuscated" aria-hidden="true">#</a> Obfuscated</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">callNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IntNumberException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> number <span class="token operator">=</span> ex<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>

<span class="token keyword">void</span> <span class="token function">callNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IntNumberException</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[p];function c(o,l){return a(),s("div",null,i)}const r=n(t,[["render",c],["__file","exceptionreturn.html.vue"]]);export{r as default};
