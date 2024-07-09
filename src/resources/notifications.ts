// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as NotificationsAPI from './notifications';

export class Notifications extends APIResource {
  /**
   * Get a paginated list of notifications
   */
  list(query?: NotificationListParams, options?: Core.RequestOptions): Core.APIPromise<Notifications>;
  list(options?: Core.RequestOptions): Core.APIPromise<Notifications>;
  list(
    query: NotificationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Notifications> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/headless/v1/notifications', { query, ...options });
  }

  /**
   * Delete a notification
   */
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<Notification> {
    return this._client.delete(`/api/headless/v1/notifications/${id}`, options);
  }

  /**
   * Archive a notification
   */
  archive(id: number, options?: Core.RequestOptions): Core.APIPromise<Notification> {
    return this._client.post(`/api/headless/v1/notifications/${id}/archive`, options);
  }

  /**
   * Mark all notifications as read
   */
  markAllAsRead(body?: NotificationMarkAllAsReadParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  markAllAsRead(options?: Core.RequestOptions): Core.APIPromise<void>;
  markAllAsRead(
    body: NotificationMarkAllAsReadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.markAllAsRead({}, body);
    }
    return this._client.post('/api/headless/v1/notifications/mark_all_as_read', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Mark a notification as read
   */
  markAsRead(id: number, options?: Core.RequestOptions): Core.APIPromise<Notification> {
    return this._client.post(`/api/headless/v1/notifications/${id}/mark_as_read`, options);
  }

  /**
   * Get new notifications count
   */
  newNotificationsCount(options?: Core.RequestOptions): Core.APIPromise<NewNotificationsCount> {
    return this._client.get('/api/headless/v1/notifications/new_notifications_count', options);
  }

  /**
   * Reset new notifications count
   */
  resetNewNotificationsCount(options?: Core.RequestOptions): Core.APIPromise<ResetNewNotificationsCount> {
    return this._client.post('/api/headless/v1/notifications/reset_new_notifications_count', options);
  }
}

export interface NewNotificationsCount {
  new_inbox_count?: number;

  new_mentions_count?: number;

  new_notifications_count?: number;
}

export interface Notification {
  id?: number;

  action?: string;

  action_web_url?: string;

  actor_image?: string | null;

  actor_name?: string;

  created_at?: string;

  display_action?: string;

  notifiable?: Notification.Notifiable;

  notifiable_id?: number;

  notifiable_title?: string;

  notifiable_type?: string;

  notification_text_structure?: Array<string>;

  read_at?: string | null;

  space_id?: number;

  space_title?: string;
}

export namespace Notification {
  export interface Notifiable {
    id?: number;

    community_id?: number;

    parent_comment_id?: number | null;

    space_id?: number;
  }
}

export interface Notifications {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<Notification | null>;
}

export interface ResetNewNotificationsCount {
  new_notifications_count?: number;
}

export interface NotificationListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;

  sort?: 'oldest' | 'latest';
}

export interface NotificationMarkAllAsReadParams {
  notification_type?: string;

  parent_notifiable?: NotificationMarkAllAsReadParams.ParentNotifiable;
}

export namespace NotificationMarkAllAsReadParams {
  export interface ParentNotifiable {
    id?: number;

    type?: string;
  }
}

export namespace Notifications {
  export import NewNotificationsCount = NotificationsAPI.NewNotificationsCount;
  export import Notification = NotificationsAPI.Notification;
  export import Notifications = NotificationsAPI.Notifications;
  export import ResetNewNotificationsCount = NotificationsAPI.ResetNewNotificationsCount;
  export import NotificationListParams = NotificationsAPI.NotificationListParams;
  export import NotificationMarkAllAsReadParams = NotificationsAPI.NotificationMarkAllAsReadParams;
}
