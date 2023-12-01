import { Component,OnInit,enableProdMode } from '@angular/core';
import {
  gridResponsiveMap,
  siderResponsiveMap
} from 'ng-zorro-antd/core/services';
import { User } from 'oidc-client';
interface MenuItem {
  title: string;
  icon?: string;
  link?: string;
  level?: number;
  open?: boolean;
  openString?: string;
  selected?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit  {
  isReload: boolean = true;
  isCollapsed: boolean = true;
  iconMenuHover: boolean = false;
  breakPoint: any = 'xxl'; // custom break point sidebar

  constructor(){    
  }

  ngOnInit(): void {
    gridResponsiveMap['xxl'] = '(min-width: 1280px)';
    siderResponsiveMap['xxl'] = '(min-width: 1279.98px)';
  }

  //public isCollapsed=false
  menuItems: MenuItem[] = [
    {
      level: 1,
      title: 'Dashboard',
      link: '/dashboard',
      icon: '../../../assets/images/sidebar/dashboard',
      open: false,
      selected: false,
      disabled: false
    },
    {
      level: 1,
      title: 'Master Data',
      icon: '../../../assets/images/sidebar/master-data',
      open: false,
      openString: 'sub_menu_master_data',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Network',
          open: false,
          openString: 'md_network',
          selected: false,
          disabled: false,
          children: [
            {
              level: 3,
              title: 'Port International',
              link: '/master-data/network/port-international',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Port Vietnam',
              link: '/master-data/network/port-vietnam',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Country Unit International',
              link: '/master-data/network/country-unit-international',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Country Unit Vietnam',
              link: '/master-data/network/country-unit-vietnam',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Airline',
              link: '/master-data/network/airline',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Shipping Line',
              link: '/master-data/network/shipping-line',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Customs Sub Department',
              link: '/master-data/network/customs-sub-department',
              selected: false,
              disabled: false
            }
          ]
        },
        {
          level: 2,
          title: 'Services',
          open: false,
          openString: 'md_services',
          selected: false,
          disabled: false,
          children: [
            {
              level: 3,
              title: 'Product',
              link: '/master-data/services/product',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Volume',
              link: '/master-data/services/volume',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Charge',
              link: '/master-data/services/charge',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Commodity',
              link: '/master-data/services/commodity',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Capacity',
              link: '/master-data/services/capacity',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Unit',
              link: '/master-data/services/unit',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Incoterms',
              link: '/master-data/services/incoterm',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Customs Procedure',
              link: '/master-data/services/customs-procedure',
              selected: false,
              disabled: false
            }
          ]
        },
        {
          level: 2,
          title: 'Industry',
          open: false,
          openString: 'md_industry',
          selected: false,
          disabled: false,
          children: [
            {
              level: 3,
              title: 'Market Segment',
              link: '/master-data/industry/market-segment',
              selected: false,
              disabled: false
            }
          ]
        }
      ]
    },
    {
      level: 1,
      title: 'Partner',
      icon: '../../../assets/images/sidebar/partner',
      open: false,
      openString: 'sub_menu_partner',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Customer',
          link: '/partner/customer',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Supplier',
          link: '/partner/supplier',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'RFI',
      icon: '../../../assets/images/sidebar/rfi',
      open: false,
      openString: 'sub_menu_rfi',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Customer',
          link: '/rfi/customer',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Supplier',
          link: '/rfi/supplier',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Costing',
      icon: '../../../assets/images/sidebar/costing',
      open: false,
      openString: 'sub_menu_costing',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Request Cost',
          link: '/costing/request-cost',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Domestic Transportation',
          link: '/costing/domestic-transportation',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Freight Management',
          link: '/costing/freight-management',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Customs Clearance',
          link: '/costing/custom-clearance',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Warehouse',
          link: '/costing/warehouse',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Pricing Management',
      icon: '../../../assets/images/sidebar/pricing-management',
      open: false,
      openString: 'sub_menu_pricing_management',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Tariff',
          open: false,
          openString: 'md_tariff',
          selected: false,
          disabled: false,
          children: [
            {
              level: 3,
              title: 'Domestic Transportation',
              link: '/pricing-management/tariff/domestic-transportation',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Freight Management',
              link: '/pricing-management/tariff/freight-management',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Customs Clearance',
              link: '/pricing-management/tariff/custom-clearance',
              selected: false,
              disabled: false
            },
            {
              level: 3,
              title: 'Warehouse',
              link: '/pricing-management/tariff/warehouse',
              selected: false,
              disabled: false
            }
          ]
        },
        {
          level: 2,
          title: 'Pricing',
          link: '/pricing-management/pricing',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Market Tariff',
          link: '/pricing-management/market-tariff',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Promotion',
          link: '/pricing-management/promotion',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Quotation',
      link: '/quotation',
      icon: '../../../assets/images/sidebar/quotation',
      open: false,
      openString: 'sub_menu_quotation',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'PNL',
          link: 'quotation/pnl',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Quotation List',
          link: 'quotation/quotation',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Contract',
      icon: '../../../assets/images/sidebar/contract',
      open: false,
      openString: 'sub_menu_contract',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Customer',
          link: '/contract/customer',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Supplier',
          link: '/contract/supplier',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Booking',
      link: '/booking',
      icon: '../../../assets/images/sidebar/booking',
      open: false,
      openString: 'sub_menu_booking',
      selected: false,
      disabled: false
    },
    {
      level: 1,
      title: 'Operations Excellence',
      link: '/operations-excellence',
      icon: '../../../assets/images/sidebar/shipment',
      open: false,
      openString: 'sub_menu_operations_excellence',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Shipment',
          link: '/operations-excellence/shipment',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Inventory Management',
          link: '/operations-excellence/inventory-management',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Exception Management',
          link: '/operations-excellence/exception-management',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Document Management',
          link: '/operations-excellence/document-management',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Configuration',
          link: '/operations-excellence/configuration',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Exception Management',
      link: '/exception-management',
      icon: '../../../assets/images/sidebar/exception-management',
      open: false,
      openString: 'sub_menu_exception_management',
      selected: false,
      disabled: false
    },
    {
      level: 1,
      title: 'SOA',
      icon: '../../../assets/images/sidebar/soa',
      open: false,
      openString: 'sub_menu_soa',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Payment',
          link: '/soa/payment',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Billing',
          link: '/soa/billing',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Report',
      link: '/report',
      icon: '../../../assets/images/sidebar/report',
      open: false,
      openString: 'sub_menu_report',
      selected: false,
      disabled: false
    },
    {
      level: 1,
      title: 'KPI',
      link: '/kpi',
      icon: '../../../assets/images/sidebar/kpi',
      open: false,
      openString: 'sub_menu_kpi',
      selected: false,
      disabled: false
    },
    {
      level: 1,
      title: 'Support',
      link: '/support',
      icon: '../../../assets/images/sidebar/support',
      open: false,
      openString: 'sub_menu_support',
      selected: false,
      disabled: false
    },
    {
      level: 1,
      title: 'Authorization',
      icon: '../../../assets/images/sidebar/authorization',
      open: false,
      openString: 'sub_menu_authorization',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Account',
          link: '/authorization/account',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Department',
          link: '/authorization/department',
          selected: false,
          disabled: false
        }
      ]
    },
    {
      level: 1,
      title: 'Test Angular',
      icon: '../../../assets/images/sidebar/authorization',
      open: false,
      openString: 'sub_menu_test',
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Products',
          link: 'test/products',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Table',
          link: 'test/table',
          selected: false,
          disabled: false
        }
      ]
    }
  ];
  ngAfterViewChecked() {
    enableProdMode();
  }

  handleOpened() {
    this.isCollapsed = !this.isCollapsed;
  }

  getLinkSidebarLogo(srcLink: string, openString: string, isActive: boolean) {
    if (srcLink.trim() === '') return null;
    const isExpanded: boolean = this.getOpenMapStatus(openString);
    return isExpanded || isActive ? srcLink + '-hover.svg' : srcLink + '.svg';
  }

  openMap: { [name: string]: boolean } = {
    //Master Data
    sub_menu_master_data: false,
    md_network: false,
    md_services: false,
    md_industry: false,

    //Partner
    sub_menu_partner: false,

    //Pricing Management
    sub_menu_rfi: false,

    //Costing
    sub_menu_costing: false,

    //Pricing Management
    sub_menu_pricing_management: false,
    md_tariff: false,

    //Operations Excellence
    sub_menu_operations_excellence: false,

    //Contract
    sub_menu_contract: false,

    //SOA
    sub_menu_soa: false,

    //Authorization
    sub_menu_authorization: false
  };

  getOpenMapStatus(name?: string) {
    if (name) {
      for (const key in this.openMap) {
        if (key === name) {
          return this.openMap[key];
        }
      }
    }

    return false;
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key === value) {
        this.openMap[key] = !this.openMap[key];
      }
    }
  }

  setActiveLinkValues(menu: any, isActive: boolean): void {
    if (((this.isCollapsed && !this.isReload) || (!this.isCollapsed && this.isReload)) && isActive) {
      if (menu.link?.length > 0) {
        const linkItems = menu.link.split('/');

        switch (menu.level) {
          case 2:
            if (linkItems && linkItems?.length > 0) {
              const openMapName = 'sub_menu_' + linkItems[1]?.replace('-', '_');
              for (const key in this.openMap) {
                if (key == openMapName) {
                  this.openMap[key] = !this.openMap[key];
                }
              }
            }
            break;
          case 3:
            if (linkItems && linkItems?.length > 1) {
              const openMapName = 'sub_menu_' + linkItems[1]?.replace('-', '_');
              const openMapNameSub = 'md_' + linkItems[2];
              for (const key in this.openMap) {
                if (key == openMapName) {
                  this.openMap[key] = !this.openMap[key];
                }
                if (key == openMapNameSub) {
                  this.openMap[key] = !this.openMap[key];
                }
              }
            }
            break;
        }
      }
      this.isReload = !this.isReload;
    }
  }

  setMenuSidebar(value: boolean): void {
    this.iconMenuHover = value;
  }
}
