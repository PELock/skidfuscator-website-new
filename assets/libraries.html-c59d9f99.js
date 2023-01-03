import{_ as e,W as a,X as i,a0 as o}from"./framework-a6fc1c2a.js";const t={},l=o(`<h1 id="libraries" tabindex="-1"><a class="header-anchor" href="#libraries" aria-hidden="true">#</a> Libraries</h1><p>Ahhh we all hate &#39;em but for the sake of not screwing up your software, we have to make use of these. It helps simplify your configurations and so and forth. Hopefully, in the maven plugin, these will be handled automatically. However that&#39;s just another thing on our todo list for now.</p><p>To add dependencies, it&#39;s quite simple:</p><ol><li>Create a folder called &quot;libs&quot;</li><li>Drag all your dependencies into said folder</li><li>Add &quot;-li=&lt;path to folder&gt;&quot; to your command line execution for skidfuscator</li></ol><p>Example:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>java -jar obfuscator-1.0.0-SNAPSHOT.jar -li=libs -ex exception.txt FluffyClicker.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://i.imgur.com/AYxEoYp.png" alt="Image of example" tabindex="0" loading="lazy"><figcaption>Image of example</figcaption></figure>`,7),r=[l];function s(n,d){return a(),i("div",null,r)}const u=e(t,[["render",s],["__file","libraries.html.vue"]]);export{u as default};
