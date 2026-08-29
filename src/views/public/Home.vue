<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="font-sans text-slate-800 bg-white w-full overflow-x-hidden">
    
    <nav 
      class="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out"
      :class="[
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      ]"
    >
      <div class="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <img 
             :src="isScrolled ? '/donghai_logo_black.png' : '/donghai_logo_white.png'"
             alt="DongHai Logo" 
             class="h-10 w-auto object-contain transition-all duration-300"
           />
          <span 
            class="text-xl font-bold tracking-tighter hidden md:block transition-colors duration-300"
            :class="isScrolled ? 'text-slate-900' : 'text-white'"
          >
            DongHai
          </span>
        </div>

        <div 
          class="hidden md:flex items-center space-x-10 text-sm font-medium transition-colors duration-300"
          :class="isScrolled ? 'text-slate-600' : 'text-white/90'"
        >
          <router-link to="/" class="hover:text-blue-500 transition-colors relative group">
            首页
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/services" class="hover:text-blue-500 transition-colors relative group">
            服务内容
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/cases" class="hover:text-blue-500 transition-colors relative group">
            客户案例
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/about" class="hover:text-blue-500 transition-colors relative group">
            关于我们
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </div>

        <router-link 
          to="/contact" 
          class="px-6 py-2 border text-sm font-medium transition-all rounded-full"
          :class="isScrolled 
            ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' 
            : 'border-white text-white hover:bg-white hover:text-black backdrop-blur-sm'"
        >
          联系我们
        </router-link>
      </div>
    </nav>

    <header class="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
      <div class="absolute inset-0 z-0">
        <video 
          autoplay 
          muted 
          loop 
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/1851190/1851190-uhd_3840_2160_25fps.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <div class="relative z-10 w-full max-w-5xl px-6 text-center pt-10">
        
        <h3 class="text-blue-200/80 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-8 animate-fade-in-up">
          Custom Software Solutions
        </h3>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-12 drop-shadow-2xl animate-fade-in-up delay-100">
          商业级软件深度定制
        </h1>
        
        <div class="animate-fade-in-up delay-200">
          <button class="group relative px-8 py-3 overflow-hidden rounded-full bg-white/10 border border-white/40 text-white transition-all hover:bg-white hover:text-black backdrop-blur-md">
            <span class="relative text-sm font-bold tracking-widest flex items-center gap-2">
              查看更多
              <svg class="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </span>
          </button>
        </div>
        
      </div>
    </header>

    <section class="py-32 bg-white">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="relative">
            <div class="absolute -left-4 -top-4 w-2/3 h-2/3 border-2 border-gray-100 rounded-2xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
              class="rounded-xl shadow-2xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition duration-700"
              alt="Coding Workspace"
            />
            <div class="absolute -bottom-10 -right-10 w-3/5 border-8 border-white rounded-2xl shadow-xl overflow-hidden hidden md:block">
               <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1926&auto=format&fit=crop" 
                class="w-full object-cover hover:scale-105 transition duration-500"
                alt="Mobile Development"
              />
            </div>
            <div class="absolute top-10 -left-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl hidden md:block">
              <div class="text-4xl font-bold mb-1">5+</div>
              <div class="text-xs uppercase tracking-widest text-slate-400">Years Exp</div>
            </div>
          </div>
          <div class="lg:pl-10">
            <h4 class="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">WHO WE ARE</h4>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              剔除冗余流程，<br>
              <span class="relative inline-block">
                直击业务核心。
                <span class="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-10"></span>
              </span>
            </h2>
            <p class="text-slate-600 text-lg leading-relaxed mb-8">
              我们是一个独立的精英全栈团队。相比于传统外包公司，我们没有臃肿的销售部门和复杂的汇报流程。
              <br><br>
              您将直接与资深架构师对接，从数据库设计到 UI 交互，每一个细节都经过精细打磨。
            </p>
            <div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div class="text-3xl font-bold text-slate-900 mb-1">100%</div>
                <div class="text-sm text-slate-500">源码交付，无加密</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-slate-900 mb-1">24h</div>
                <div class="text-sm text-slate-500">极速响应支持</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-100/80">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="mb-16 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h4 class="text-slate-500 font-bold tracking-widest uppercase text-xs mb-3">SELECTED WORKS</h4>
            <h2 class="text-4xl font-bold text-slate-900">
              拒绝模板，<br>
              为业务<span class="text-blue-600">量身定制</span>。
            </h2>
          </div>
          <p class="text-slate-500 max-w-md mt-6 md:mt-0 text-sm leading-relaxed">
            从 0 到 1 的架构设计。我们深入不同行业，解决具体的业务痛点，而非简单的代码堆砌。
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
          <div class="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 bg-white border border-gray-100">
            <div class="h-full w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                class="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition duration-700"
                alt="SaaS Dashboard"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 p-8 w-full">
              <div class="flex gap-2 mb-3">
                <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">医疗行业</span>
                <span class="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded">SaaS</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">智慧医院云管理平台</h3>
              <p class="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition duration-500 translate-y-4 group-hover:translate-y-0">
                重构旧版 HIS 系统，解决数据孤岛问题。实现日均 10万+ 门诊数据的实时可视化处理。
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-8 h-full">
            <div class="flex-1 group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 bg-white border border-gray-100">
               <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                alt="Mobile App"
              />
              <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
              <div class="absolute bottom-0 left-0 p-6">
                <h3 class="text-xl font-bold text-white">跨境电商独立站 App</h3>
              </div>
            </div>
            <div class="flex-1 group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 bg-white border border-gray-100">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                alt="Fintech Data"
              />
              <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500"></div>
              <div class="absolute bottom-0 left-0 p-6">
                <h3 class="text-xl font-bold text-white">量化交易数据看板</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900">底层技术栈</h2>
          <p class="text-slate-500 mt-2">不依赖低代码平台，坚持原生开发以确保最佳性能</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 border border-gray-100 rounded-xl hover:border-slate-900 transition duration-300">
            <h3 class="text-lg font-bold text-slate-900 mb-2">Web 平台</h3>
            <p class="text-slate-500 text-sm mb-4">企业官网、管理后台 (Admin)、SaaS 平台</p>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">Vue3</span>
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">React</span>
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">TS</span>
            </div>
          </div>
          <div class="p-8 border border-gray-100 rounded-xl hover:border-slate-900 transition duration-300">
            <h3 class="text-lg font-bold text-slate-900 mb-2">移动端开发</h3>
            <p class="text-slate-500 text-sm mb-4">微信小程序、iOS/Android 跨端应用</p>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">Flutter</span>
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">UniApp</span>
            </div>
          </div>
          <div class="p-8 border border-gray-100 rounded-xl hover:border-slate-900 transition duration-300">
            <h3 class="text-lg font-bold text-slate-900 mb-2">后端架构</h3>
            <p class="text-slate-500 text-sm mb-4">高并发 API、数据库设计、支付集成</p>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">Java</span>
              <span class="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-100/80">
      <div class="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 class="text-4xl font-bold text-slate-900 mb-6">准备好开始了？</h2>
        <p class="text-slate-500 mb-12">
          留下您的联系方式，我们将在 24 小时内与您沟通需求。<br>
          <span class="text-sm text-slate-400 mt-2">No Spam. 只谈技术与业务。</span>
        </p>

        <form class="text-left space-y-6 bg-white p-8 md:p-12 border border-slate-200 rounded-xl shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">您的称呼</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 outline-none transition" placeholder="例如：张先生">
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">联系方式</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 outline-none transition" placeholder="微信 ID 或 手机号">
            </div>
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2">需求简述</label>
            <textarea rows="4" class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 outline-none transition" placeholder="想做一个什么样的项目？核心功能有哪些？"></textarea>
          </div>
          <button class="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-700 transition shadow-xl">
            发送咨询
          </button>
        </form>
      </div>
    </section>

    <footer class="bg-white border-t border-gray-100 py-10 text-center">
      <p class="text-slate-400 text-sm">&copy; 2026 DongHai. All rights reserved.</p>
    </footer>

  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}
.delay-100 { animation-delay: 0.2s; }
.delay-200 { animation-delay: 0.4s; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>