import { Component, ChangeDetectorRef, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ngx-admin-lte';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html'
})
export class PageNumComponent implements OnInit, AfterViewInit, OnDestroy {
  public id = 0;
  public sub: any;
  public pageData:any;
  public boxSection: any;
  public singleIframeHeight = "";
  public pages:Object;

  constructor(
    private route: ActivatedRoute,
    private breadServ: BreadcrumbService,
    public sanitizer: DomSanitizer,
    private cdRef:ChangeDetectorRef
  ) {
    // TODO
        
      this.pages =   {
          "home": {
            "title": "Stores & Offers",
            "titleSub" : "",
            "layout": "box", //box,tab,accordion
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/1nSLRK-DXqF6TnDEENGM7orcKor2oXBFv0_nWHDx671k/pubhtml?gid=0&single=true&headers=false&chrome=false&widget=false",
                "title": "Hot Info",
                "type": "iframe", //iframe,video
                "height": "100%"
              }
            ]
          },
          "fashion-offers": {
            "title": "Fashion Offers",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1939335151&single=true&headers=false&chrome=false&widget=false",
                "title": "Men & Women Offers",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1685717330&single=true&headers=false&chrome=false&widget=false",
                "title": "Baby & Kids Offers",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
		  "travel-offers": {
            "title": "Travel",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1889888209&single=true&headers=false&chrome=false&widget=false",
                "title": "Domestic Flights",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1830329162&single=true&headers=false&chrome=false&widget=false",
                "title": "International Flights",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1011309374&single=true&headers=false&chrome=false&widget=false",
                "title": "Hotels",
                "type": "iframe",
                "height": "100%"
              },
             {
                "url": "https://docs.google.com/spreadsheets/d/1aYBL8pKKMy3_AanlRGVYRQeSbv8sWe_4YMsr6NzWVo0/pubhtml?gid=1286543445&single=true&headers=false&chrome=false&widget=false",
                "title": "Bus",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1355922391&single=true&headers=false&chrome=false&widget=false",
                "title": "Car Hire",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "recharge-bill-offers": {
            "title": "Recharge Offers",
            "titleSub" : "",
            "layout": "box", //box,tab,accordion
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=123804980&single=true&headers=false&chrome=false&widget=false",
                "title": "Recharge and Bill Offers",
                "type": "iframe", //iframe,video
                "height": "100%"
              }
            ]
          },
          "electronics-offers": {
            "title": "",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=379175149&single=true&headers=false&chrome=false&widget=false",
                "title": "Electronics Offers",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "health-beauty-offers": {
            "title": "Health &amp; Beauty",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=15874255&single=true&headers=false&chrome=false&widget=false",
                "title": "Medicine Offers",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=1206022738&single=true&headers=false&chrome=false&widget=false",
                "title": "Cosmetics and Beauty",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "payment-gateway-offers": {
            "title": "",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTm2Y5BKr7d847yX9ZlXA_emuzFDTVqgZQAZasIMVaUppAziuRTgPgGkVLe9jGPIp-B0mSMWSbemm94/pubhtml?gid=839489027&single=true&headers=false&chrome=false&widget=false",
                "title": "Payment Gateway Cashback and Discount",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
		  "introduction": {
            "title": "Business Guidance",
            "titleSub" : "Begin your journey here",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1K8CgGiBL5I094kqL23B4clQJ285ceZqnExCLSLuQVsM/pub?embedded=true",
                "title": "Introduction",
                "type": "iframe",
                "height": "1000px"
              }
            ]
          },
          "how-to-start": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1kPHpnkG3IAqkkS1E_f4EtPrSb-CTESnNpLVVWyHfQb0/pub?embedded=true",
                "title": "How to Start",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "step-by-step-guide": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/1aR4lQ1RjZ-k9Tq-2ZjejoOIHsrVt86EKqxAUHdfHnMA/pubhtml?headers=false&chrome=false&widget=false",
                "title": "Step by Step Guide",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "set-up-business": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1HiUdomGBQzEZySeNwBYHBfougui2ZLX6eO9SoURDles/pub?embedded=true",
                "title": "Set Up Business",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "how-ssd-works": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/18SE3p4FeeM0fl8lY6HzEKhsvebM8DN-x6__9_uiE4fw/pub?embedded=true",
                "title": "How SSD Works",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "how-cashlu-works": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1_-hJ6S84UNEtZYyMwC-8dIgFAJgL5tI9gTbujVulVSY/pub?embedded=true",
                "title": "How CashLu Works",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "marketing-guidance": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1lOIAy3zd5xmAe2agf_RrvQiyZM422UeaJvRtfmXTgF0/pub?embedded=true",
                "title": "Marketing Guidance",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "customer-handling": {
            "title": "Business Guidance",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1Mvh11l9OUpk7zqYtswtPN7kFWwzzZiVg3xivZf6ixDQ/pub?embedded=true",
                "title": "Customer Handling",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "ssd-plans": {
            "title": "My Plans",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/1UKtmGnnbdcyTI23s_EZ3ebuVKRicr3B9h1Rvhgx6MpE/pub?embedded=true",
                "title": "SSD Plans",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "master-adviser-plan": {
            "title": "My Plans",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/16zdl83tqOnUlvTiAJ3xzvDeooFMvptuP3wDIuwwp7vY/pub?embedded=true",
                "title": "Master Adviser Plan",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "fashion-stores": {
            "title": "Fashion Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1576997281&single=true&headers=false&chrome=false&widget=false",
                "title": "Men Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=320383276&single=true&headers=false&chrome=false&widget=false",
                "title": "Women Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=644107035&single=true&headers=false&chrome=false&widget=false",
                "title": "Lingerie Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1035926768&single=true&headers=false&chrome=false&widget=false",
                "title": "Jewellery Stores",
                "type": "iframe",
                "height": "100%"
              },
             {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1035926768&single=true&headers=false&chrome=false&widget=false",
                "title": "Footwear Stores",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1709269&single=true&headers=false&chrome=false&widget=false",
                "title": "Accessories Stores",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "electronics-stores": {
            "title": "Electronics Stores",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1569018102&single=true&headers=false&chrome=false&widget=false",
                "title": "Electronics Stores",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "recharge-bill-stores": {
            "title": "Recharge & Bill Stores",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1845571722&single=true&headers=false&chrome=false&widget=false",
                "title": "Recharge & Bill Payments",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "home-kitchen-stores": {
            "title": "Home & Kitchen Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1542365929&single=true&headers=false&chrome=false&widget=false",
                "title": "Large Appliances",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=2030837107&single=true&headers=false&chrome=false&widget=false",
                "title": "Kitchen Appliances",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=773956281&single=true&headers=false&chrome=false&widget=false",
                "title": "Furniture",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=89542137&single=true&headers=false&chrome=false&widget=false",
                "title": "Grocery",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "travel-stores": {
            "title": "Travel Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=930960313&single=true&headers=false&chrome=false&widget=false",
                "title": "Flight",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=293887155&single=true&headers=false&chrome=false&widget=false",
                "title": "Hotel",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1101519320&single=true&headers=false&chrome=false&widget=false",
                "title": "Bus & Car",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
           "all-stores": {
            "title": "All Stores List (A to Z)",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=881866191&single=true&chrome=false&widget=false",
                "title": "All Stores (A to Z)",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "health-beauty-stores": {
            "title": "Health & Beauty Stores",
            "titleSub" : "",
            "layout": "tab",
            "section": [
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=187638597&single=true&headers=false&chrome=false&widget=false",
                "title": "Beauty Products & Personal Care",
                "type": "iframe",
                "height": "100%"
              },
              {
                "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdB1bMx7EPG2xYDBO_tBftleBkqoFnZnQveqf6h9jNQLDURP0UdOGu4WcxtuZKCc9fZotFOm6OX1Wl/pubhtml?gid=1882233758&single=true&headers=false&chrome=false&widget=false",
                "title": "Medicine & Healtcare",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "worldof-online-shopping": {
            "title": "World of Online Shopping",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vS_-CJrm5vaDa0T2e62fQ9hwMvNnnrPajdpZjgWUoMbDK_jOFXgVHzvSaVhmbQj_ZKF6X5HC-9pieS3/pub?embedded=true",
                "title": "World of Online Shopping",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "deals-offers-guide": {
            "title": "Deals and Offers",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vS-Oh7HcWdYTZetDX3sXI5MidAgibC0H-VC_sWU2vhKtrQYE6p6lHckQA-cnUyjWkCiMGzWy7K3iVZZ/pub?embedded=true",
                "title": "Deals and Offers",
                "type": "iframe",
                "height": "100%"
              }
            ]
          },
          "about-ssd": {
            "title": "",
            "titleSub" : "",
            "layout": "box",
            "section": [
              {
                "url": "https://docs.google.com/document/d/e/2PACX-1vRLbp5s1CqArVU37I65BzO6y43OSIYk2dZQ0AnMV6a_1c4nsTmmfoM07-qaVC04Qok38g4ZO1Ry-2S_/pub?embedded=true",
                "title": "About SSD",
                "type": "iframe",
                "height": "100%"
              }
            ]
          }


        }
    
  }

  public ngOnInit() {
      
    // when calling routes change
    const idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {

      this.id = data[idkey];
      this.pageData = this.pages[this.id];
      this.boxSection = this.pages[this.id].section;
              
       if((this.boxSection.length == 1 && this.pageData.layout == "box") || this.pageData.layout == "tab"){
            $("body").addClass("pageHeightAuto");
        }else{
            $("body").removeClass("pageHeightAuto");
        }
        
    
      // changing header
      this.breadServ.set({
        header: this.pages[this.id].title,
        description: this.pages[this.id].titleSub,
        display: false,
        levels: [
          {
            icon: 'dashboard',
            link: ['/'],
            title: 'Home'
          },
          {
            icon: 'clock-o',
            link: ['/page/' + this.id],
            title: 'Page ' + this.id
          }
        ]
      });
        
    });
      
      
    
  }
    
 public ngAfterViewInit() {
    
      let self =this;
      $(window).resize(function() {
        self.setHeight();
      });
     
      this.setHeight();
    
  }
    
 setHeight():void {
     
    if((this.boxSection.length == 1 && this.pageData.layout == "box") || this.pageData.layout == "tab"){
    var windowHeight = $(window).innerHeight();
    if($('.pageHeightAuto .box-iframe').offset()){
        var topHeight = $('.pageHeightAuto .box-iframe').offset().top;
        this.singleIframeHeight = (windowHeight - topHeight).toString();
         this.cdRef.detectChanges();
        $('.pageHeightAuto .box-iframe').css('height', windowHeight-topHeight);
    }
    
    }
  }
  

  public ngOnDestroy() {
    $("body").removeClass("pageHeightAuto");
    $('.pageHeightAuto .box-iframe').css('height', '');
    this.sub.unsubscribe();
    this.breadServ.clear();
    this.route = null;
  }
}
