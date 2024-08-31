<script lang="ts">
  import { config } from '$lib/store.js'
</script>

<div class="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800">
  <div class="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
  <div class="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
  <div class="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
  <div class="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
  <div class="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800">
    <div class="">
      <div class="relative bg-white px-5 pb-8 pt-10">
        <div class="text-xs">
          <div class="mb-4 grid grid-cols-[32px_1fr_32px]">
            <div class="w-3 place-self-start fill-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
            <div></div>
            <div class="w-1 place-self-end fill-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
            </div>
          </div>
          <div class="grid grid-cols-[32px_1fr] gap-y-6">
            <div class="w-3 fill-primary-600 pt-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
              </svg>
            </div>
            <div>
              <div class="text-base">🌱 Birch pollen: 🙂</div>
              <div class="text-gray-700">Tomorrow</div>
            </div>
            <div class="w-3 fill-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div>{$config.coords || "Stuttgart, Germany"}</div>
            <div class="w-3 fill-gray-500 pt-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
            <div>
              <p class="mb-0">Universal Pollen Index: 1</p>
              <p class="mb-5">(0: None, 5: Very High)</p>
              <p class="mb-5">Health recommendations: People with very high allergy to pollen are likely to experience symptoms.</p>
              <p>Currently in season: No</p>
            </div>
            <div class="w-3 fill-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
              </svg>
            </div>
            <div>Public - Busy</div>
            <div class="w-3 fill-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
              </svg>
            </div>
            <div>pollencal.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

